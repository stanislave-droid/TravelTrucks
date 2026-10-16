import Link from "@/components/ui/Link/Link";
import Image from "next/image";
import css from "./HeroBlock.module.css";
import clsx from "clsx";

export default function HeroBlock() {
  return (
    <section
      className={clsx("container", css.section)}
      aria-label="Hero section"
    >
      <Image
        src={"/opengraph-image.jpg"}
        alt="hero-image"
        fill
        loading="eager"
        className={css.image}
      />
      <div className={css.contentWrapper} aria-label="Hero content">
        <h1 className={css.headding}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link href="/trucks" variant="green" className={css.link}>
          View Now
        </Link>
      </div>
    </section>
  );
}
