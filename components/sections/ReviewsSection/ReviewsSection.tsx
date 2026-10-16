import { IFeedback } from "@/types/feedback";
import css from "./ReviewsSection.module.css";
import SectionHeadding from "@/components/ui/SectionHeadding/SectionHeadding";
import Review from "@/components/ui/Review/Review";

interface ReviewsSectionProps {
  reviews: IFeedback[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className={css.reviewsSection} aria-label="Reviews">
      <SectionHeadding className={css.sectionTitle}>Reviews</SectionHeadding>
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
}
