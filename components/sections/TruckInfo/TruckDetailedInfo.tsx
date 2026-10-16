import { IDetailedTruck } from "@/types/truck";
import SectionHeadding from "@/components/ui/SectionHeadding/SectionHeadding";
import AmenitiesList from "@/components/ui/Amenity/AmenitiesList";
import InfoBlockWrapper from "@/components/ui/InfoBlockWrapper/InfoBlockWrapper";
import css from "./TruckInfo.module.css";
import { RADIO_BTN_TEXT_VALUES } from "@/lib/constants";

interface TruckDetailedInfoProps {
  truckInfo: IDetailedTruck;
}

interface PropertyProps {
  property: string;
  value: string;
}

function Property({ property, value }: PropertyProps) {
  return (
    <div className={css.propertyWrapper}>
      <p className={css.property}>{property}</p>
      <p className={css.propertyValue}>{value}</p>
    </div>
  );
}

export default function TruckDetailedInfo({
  truckInfo: { amenities, form, length, width, height, tank, consumption },
}: TruckDetailedInfoProps) {
  return (
    <InfoBlockWrapper
      className={css.detailedInfoWrapper}
      ariaLabel="Detailed description"
    >
      <SectionHeadding>Vehicle details</SectionHeadding>
      <AmenitiesList amenities={amenities} />
      <span className={css.line} />
      <div className={css.propertiesList} aria-label="Properties">
        <Property property="Form" value={RADIO_BTN_TEXT_VALUES[form]} />
        <Property property="Length" value={length} />
        <Property property="Width" value={width} />
        <Property property="Height" value={height} />
        <Property property="Tank" value={tank} />
        <Property property="Consumption" value={consumption} />
      </div>
    </InfoBlockWrapper>
  );
}
