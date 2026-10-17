import Image from "next/image";
import css from "./TrucksCard.module.css";
import Link from "@/components/ui/Link/Link";
import { TRUCKS_DEFAULT_PAGE_PATH } from "@/lib/constants";
import { IoMdClose } from "react-icons/io";

export default function TrucksNotFound() {
  return (
    <div className={css.background}>
      <Image
        src="/trucks-not-found.png"
        alt="Trucks not found"
        width={488}
        height={463}
        quality={70}
        loading="eager"
        className={css.notFounImage}
      />
      <h3 className={css.notFoundTitle}>No campers found</h3>
      <p className={css.notFoundText}>
        We couldn`t find any campers that match your filters. Try adjusting your
        search or clearing some filters.
      </p>
      <div className={css.notFoundLinksWrapper}>
        <Link
          href={TRUCKS_DEFAULT_PAGE_PATH}
          variant="white"
          className={css.clearFilters}
        >
          <IoMdClose size={24} />
          Clear filters
        </Link>
        <Link
          href={TRUCKS_DEFAULT_PAGE_PATH}
          variant="green"
          className={css.showAll}
        >
          View all campers
        </Link>
      </div>
    </div>
  );
}
