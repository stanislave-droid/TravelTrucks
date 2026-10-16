import { CiMap } from "react-icons/ci";
import Star from "../RatingStars/FilledStar";
import css from "./RateLocationBlock.module.css";
import clsx from "clsx";

interface RateLocationBlockProps {
  rating: number;
  totalReviews: number;
  location: string;
  className?: string;
}

export default function RateLocationBlock({
  rating,
  totalReviews,
  location,
  className,
}: RateLocationBlockProps) {
  return (
    <div className={clsx(css.inferContentWrapper, className)}>
      <div className={css.ratingWrapper} aria-label="Rating">
        {rating >= 0.5 ? <Star variant="filled" /> : <Star variant="empty" />}
        <p className={css.rating}>{`${rating}(${totalReviews} Reviews)`}</p>
      </div>
      <div className={css.locationWrapper} aria-label="Location">
        <CiMap size={24} />
        <span className={css.location}>{location}</span>
      </div>
    </div>
  );
}
