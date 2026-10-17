import TruckGallery from "@/components/sections/TruckGallery/TruckGallery";
import TruckInfo from "@/components/sections/TruckInfo/TruckInfo";
import { fetchFeedbacks, fetchTruck } from "@/lib/api/serverApi";
import ReviewsSection from "@/components/sections/ReviewsSection/ReviewsSection";
import BookForm from "@/components/sections/BookForm/BookForm";
import css from "./DetailedTruckPage.module.css";
import clsx from "clsx";

interface DetailedTruckPageProps {
  params: Promise<{ truckId: string }>;
}

export default async function DetailedTruckPage({
  params,
}: DetailedTruckPageProps) {
  const { truckId } = await params;
  const [truckResponse, reviews] = await Promise.all([
    fetchTruck(truckId),
    fetchFeedbacks(truckId),
  ]);

  return (
    <main className={clsx("container", css.main)}>
      <div aria-label="Main truck details" className={css.mainContent}>
        <TruckGallery images={truckResponse.gallery} />
        <TruckInfo truckInfo={truckResponse} />
      </div>
      <div aria-label="Additional info" className={css.additionalContent}>
        <ReviewsSection reviews={reviews} />
        <BookForm className={css.form} truckId={truckId} />
      </div>
    </main>
  );
}
