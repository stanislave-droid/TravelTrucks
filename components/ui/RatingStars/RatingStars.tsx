import clsx from "clsx";
import css from "./RatingStars.module.css";
import Star from "./FilledStar";

interface RatingStarsProps {
  value: number;
  className?: string;
}

export default function RatingStars({
  value,
  className,
}: RatingStarsProps): React.ReactNode {
  const stars = new Array(5)
    .fill(Math.max(0, Math.min(5, value)))
    .map((value, index) => {
      if (value - index >= 0.5) return "filled";
      else return "empty";
    })
    .map((value, index) => <Star key={index} variant={value} />);

  return <div className={clsx(css.ratingStars, className)}>{stars}</div>;
}
