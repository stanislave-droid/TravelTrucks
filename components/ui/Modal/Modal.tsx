"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  let container;

  if (typeof window !== "undefined") {
    container = document.body;
  }

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, []);

  return (
    container &&
    createPortal(
      <div className={css.backdrop}>
        <div
          className={`${css.modal} ${className ?? ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>,
      container,
    )
  );
};

export default Modal;
