"use client";

import Link from "@/components/ui/Link/Link";
import css from "./Header.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();
  const activePage = pathName;

  return (
    <nav className={css.navigation} aria-label="Основна навігація">
      <Link
        href="/"
        className={clsx(css.navLink, activePage == "/" ? css.activeLink : "")}
      >
        Home
      </Link>
      <Link
        href="/trucks"
        className={clsx(
          css.navLink,
          activePage == "/trucks" ? css.activeLink : "",
        )}
      >
        Catalog
      </Link>
    </nav>
  );
};

export default Navigation;
