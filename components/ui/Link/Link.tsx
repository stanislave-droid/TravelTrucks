import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import css from "./Link.module.css";

type LinkProps = NextLinkProps & {
  children?: React.ReactNode;
  className?: string;
  variant?: "clear" | "green" | "white";
  active?: boolean;
};

export default function Link({
  children,
  className,
  variant = "clear",
  active,
  ...props
}: LinkProps): React.ReactNode {
  return (
    <NextLink
      {...props}
      className={clsx(
        css.link,
        css[variant],
        active && css["active"],
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
