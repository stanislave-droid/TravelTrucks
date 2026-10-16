import { IFeedback } from "@/types/feedback";
import InfoBlockWrapper from "../InfoBlockWrapper/InfoBlockWrapper";
import RatingStars from "../RatingStars/RatingStars";
import css from "./Review.module.css";

interface ReviewProps {
  review: IFeedback;
}

export default function Review({
  review: { reviewer_name, comment, reviewer_rating },
}: ReviewProps) {
  return (
    <InfoBlockWrapper className={css.reviewWrapper}>
      <div className={css.contentWrapper}>
        <div className={css.reviewImageWrapper} aria-label="Reviewer image">
          <p className={css.reviewerImageText}>{reviewer_name[0]}</p>
        </div>
        <div className={css.mainInfoWrapper}>
          <h4 className={css.name}>{reviewer_name}</h4>
          <RatingStars value={reviewer_rating} />
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </InfoBlockWrapper>
  );
}
