import css from "./RatingStars.module.css";
import { FaStar } from "react-icons/fa";

interface StarProps {
  variant: "filled" | "empty";
}

export default function Star({ variant }: StarProps) {
  return variant == "filled" ? (
    <FaStar className={css.filledStar} />
  ) : (
    <FaStar className={css.emptyStar} />
  );
}
