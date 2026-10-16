import clsx from "clsx";
import Navigation from "@/components/sections/Header/Navigation";
import css from "./Header.module.css";
import Logo from "@/components/ui/Logo/Logo";

const Header = async () => {
  return (
    <header className={css.header}>
      <div className={clsx("container", css.container)}>
        <Logo />
        <Navigation />
        <div></div>
      </div>
    </header>
  );
};

export default Header;
