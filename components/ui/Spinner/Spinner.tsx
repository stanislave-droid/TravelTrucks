import css from "./Spinner.module.css";
import { SpinnerCircularFixed } from "spinners-react";

interface SpinnerProps {
  size?: number;
  color?: string;
  secondaryColor?: string;
  className?: string;
}

export default function Spinner({
  size = 72,
  color = "var(--button-primary-hover)",
  secondaryColor = "var(--foreground)",
  className,
}: SpinnerProps): React.ReactNode {
  return (
    <SpinnerCircularFixed
      color={color}
      size={size}
      secondaryColor={secondaryColor}
      className={className}
    />
  );
}
