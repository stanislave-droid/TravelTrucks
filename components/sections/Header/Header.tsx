import clsx from "clsx";
import Link from "@/components/ui/Link/Link";
import Navigation from "@/components/sections/Header/Navigation";
import css from "./Header.module.css";
import { headers } from "next/headers";

const Header = async () => {
  const headersList = await headers();
  const pathName = headersList.get("x-current-path") || "";

  return (
    <header className={css.header}>
      <div className={clsx("container", css.container)}>
        <Link href="/" className={css.logo} aria-label="On main page"></Link>

        <Navigation activePage={pathName} />
      </div>
    </header>
  );
};

export default Header;
