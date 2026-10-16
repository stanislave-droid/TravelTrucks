import { ITruck } from "@/types/truck";
import css from "./TrucksCard.module.css";
import Image from "next/image";
import Star from "@/components/ui/RatingStars/FilledStar";
import { CiMap } from "react-icons/ci";
import AmenitiesList from "@/components/ui/Amenity/AmenitiesList";
import Link from "@/components/ui/Link/Link";
import RateLocationBlock from "@/components/ui/RateLocationBlock/RateLocationBlock";
import SectionHeadding from "@/components/ui/SectionHeadding/SectionHeadding";
import InfoBlockWrapper from "@/components/ui/InfoBlockWrapper/InfoBlockWrapper";

interface TruckCardProps {
  truckInfo: ITruck;
}

export default function TrucksCard({
  truckInfo: {
    coverImage,
    name,
    price,
    rating,
    totalReviews,
    location,
    description,
    amenities,
    id,
  },
}: TruckCardProps) {
  return (
    <li className={css.cardWrapper} aria-label={name}>
      <InfoBlockWrapper className={css.infoBlockContainer}>
        <Image
          src={coverImage}
          alt={name}
          width={219}
          height={240}
          className={css.image}
          loading="lazy"
        />
        <div className={css.contentWrapper} aria-label="Truck info">
          <div className={css.mainInfoWrapper} aria-label="Main info">
            <div className={css.titlePriceWrapper} aria-label="Name and price">
              <SectionHeadding>{name}</SectionHeadding>
              <SectionHeadding>{`€${price}`}</SectionHeadding>
            </div>
            <RateLocationBlock
              rating={rating}
              totalReviews={totalReviews}
              location={location}
            />
          </div>
          <p className={css.description}>{description}</p>
          <AmenitiesList amenities={amenities} showIcons showOnlyLine />
          <Link
            href={`/trucks/${id}`}
            className={css.showMoreLink}
            variant="green"
          >
            Show more
          </Link>
        </div>
      </InfoBlockWrapper>
    </li>
  );
}
