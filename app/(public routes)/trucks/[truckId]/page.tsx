import TruckGallery from "@/components/sections/TruckGallery/TruckGallery";
import TruckInfo from "@/components/sections/TruckInfo/TruckInfo";
import { fetchFeedbacks, fetchTruck } from "@/lib/api/serverApi";
import ReviewsSection from "@/components/sections/ReviewsSection/ReviewsSection";
import BookForm from "@/components/sections/BookForm/BookForm";
import css from "./DetailedTruckPage.module.css";
import clsx from "clsx";
import { Metadata } from "next";

interface DetailedTruckPageProps {
  params: Promise<{ truckId: string }>;
}

export async function generateMetadata({
  params,
}: DetailedTruckPageProps): Promise<Metadata> {
  const { truckId } = await params;
  const truck = await fetchTruck(truckId);

  const title = `${truck.name} - TravelTruck`;
  const cleanDescription = truck.description.replace(/\s+/g, " ").trim();
  const description =
    cleanDescription.length > 160
      ? `${cleanDescription.slice(0, 157)}...`
      : cleanDescription;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/trucks/${truckId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: truck.gallery[0].original,
          height: 1200,
          width: 630,
          alt: truck.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [truck.gallery[0].original],
    },
  };
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
