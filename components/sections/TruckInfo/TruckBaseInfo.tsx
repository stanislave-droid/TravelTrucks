import { IDetailedTruck } from "@/types/truck";
import css from "./TruckInfo.module.css";
import RateLocationBlock from "@/components/ui/RateLocationBlock/RateLocationBlock";
import SectionHeadding from "@/components/ui/SectionHeadding/SectionHeadding";
import InfoBlockWrapper from "@/components/ui/InfoBlockWrapper/InfoBlockWrapper";

interface TruckBaseInfoProps {
  truckInfo: IDetailedTruck;
}

export default function TruckBaseInfo({
  truckInfo: { name, rating, totalReviews, location, price, description },
}: TruckBaseInfoProps) {
  return (
    <InfoBlockWrapper ariaLabel="Base description">
      <SectionHeadding className={css.name}>{name}</SectionHeadding>
      <RateLocationBlock
        rating={rating}
        totalReviews={totalReviews}
        location={location}
        className={css.rateLocationBlock}
      />
      <SectionHeadding className={css.price}>{`€${price}`}</SectionHeadding>
      <p className={css.description}>{description}</p>
    </InfoBlockWrapper>
  );
}
