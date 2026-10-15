import { ITruck } from "@/types/truck";
import css from "./TrucksCard.module.css";
import Image from "next/image";
import Star from "@/components/ui/RatingStars/FilledStar";
import { CiMap } from "react-icons/ci";
import AmenitiesList from "@/components/ui/Amenity/AmenitiesList";
import Link from "@/components/ui/Link/Link";

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
            <h3 className={css.title}>{name}</h3>
            <p className={css.price}>{`€${price}`}</p>
          </div>
          <div className={css.inferContentWrapper}>
            <div className={css.ratingWrapper} aria-label="Rating">
              {rating >= 0.5 ? (
                <Star variant="filled" />
              ) : (
                <Star variant="empty" />
              )}
              <p
                className={css.rating}
              >{`${rating}(${totalReviews} Reviews)`}</p>
            </div>
            <div className={css.locationWrapper} aria-label="Location">
              <CiMap size={24} />
              <span className={css.location}>{location}</span>
            </div>
          </div>
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
    </li>
  );
}
