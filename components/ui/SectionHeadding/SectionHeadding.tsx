import clsx from "clsx";
import css from "./SectionHeadding.module.css";

interface SectionHeaddingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeadding({
  children,
  className,
}: SectionHeaddingProps) {
  return <h3 className={clsx(css.headding, className)}>{children}</h3>;
}
