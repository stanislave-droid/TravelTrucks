import Link from "@/components/ui/Link/Link";
import css from "./Header.module.css";
import clsx from "clsx";

interface NavigationProps {
  activePage: string;
}

const Navigation = ({ activePage }: NavigationProps) => {
  return (
    <nav className={css.nav} aria-label="Основна навігація">
      <Link
        href="/"
        className={clsx(css.navLink, activePage == "" ? css.activeLink : "")}
      >
        Home
      </Link>
      <Link
        href="/catalog"
        className={clsx(
          css.navLink,
          activePage == "catalog" ? css.activeLink : "",
        )}
      >
        Catalog
      </Link>
    </nav>
  );
};

export default Navigation;
