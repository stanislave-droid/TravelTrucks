"use client";

import { useId, useState } from "react";
import clsx from "clsx";

import css from "./Input.module.css";
import { MdErrorOutline } from "react-icons/md";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleInput: (value: string) => void;
  onErrorLabel?: string;
}

export default function Input({
  handleInput,
  className,
  children,
  onErrorLabel,
  placeholder,
  ...props
}: InputProps): React.ReactNode {
  const [validationError, setValidationError] = useState<string>("");
  const id = useId();

  function handleInputChange(event: React.InputEvent<HTMLInputElement>) {
    if (handleInput) handleInput(event.currentTarget.value);
  }

  function handleValidation(event: React.FocusEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    input.reportValidity();
    setValidationError(input.validity.valid ? "" : input.validationMessage);
  }

  return (
    <div className={clsx(css["wrapper"], className)}>
      {validationError && onErrorLabel && (
        <label htmlFor={`${id}-${placeholder}`} className={css.label}>
          {onErrorLabel}
        </label>
      )}
      <input
        {...props}
        className={clsx(css["input"], validationError && css.invalidInput)}
        onInput={handleInputChange}
        onBlur={handleValidation}
        id={`${id}-${placeholder}`}
        placeholder={placeholder}
      />
      {children}
      {validationError && (
        <MdErrorOutline size={24} className={css.errorIcon} />
      )}
      {validationError && <p className={css["validity"]}>{validationError}</p>}
    </div>
  );
}
