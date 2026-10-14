import HeroBlock from "@/components/sections/HeroBlock/HeroBlock";
import css from "./page.module.css";

export default async function Home() {
  return (
    <main className={css.main}>
      <HeroBlock />
    </main>
  );
}
