import Link from "next/link";
import Icon from "../Icon/Icon";
import css from "./Logo.module.css";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={clsx(css.logo, className)}>
      <Icon name="icon-logo" width={136} height={16} />
    </Link>
  );
}
