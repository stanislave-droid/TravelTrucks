import Link from "@/components/ui/Link/Link";
import Image from "next/image";

export default function HeroBlock() {
  return (
    <section>
      <Image
        src={"/opengraph-image.jpg"}
        alt="hero-image"
        width={1440}
        height={692}
      />
      <h1></h1>
      <p></p>
      <Link href="/catalog">View Now</Link>
    </section>
  );
}
