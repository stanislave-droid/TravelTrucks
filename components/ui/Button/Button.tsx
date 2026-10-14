import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "green" | "white";
}

export default function Button({
  children,
  className,
  onClick,
  variant = "green",
  ...props
}: ButtonProps): React.ReactNode {
  return (
    <button
      {...props}
      className={clsx(css.button, css[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
