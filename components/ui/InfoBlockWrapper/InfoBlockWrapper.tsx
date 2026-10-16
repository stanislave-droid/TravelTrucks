import clsx from "clsx";
import css from "./InfoBlockWrapper.module.css";

interface InfoBlockWrapperProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function InfoBlockWrapper({
  children,
  className,
  ariaLabel,
}: InfoBlockWrapperProps) {
  return (
    <div
      className={clsx(css.infoBlockWrapper, className)}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}
