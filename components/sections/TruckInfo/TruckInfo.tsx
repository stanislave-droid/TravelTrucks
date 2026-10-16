import { IDetailedTruck } from "@/types/truck";
import css from "./TruckInfo.module.css";
import TruckBaseInfo from "./TruckBaseInfo";
import TruckDetailedInfo from "./TruckDetailedInfo";

interface TruckInfoProps {
  truckInfo: IDetailedTruck;
}

export default function TruckInfo({ truckInfo }: TruckInfoProps) {
  return (
    <section
      className={css.truckInfoWrapper}
      aria-label={`${truckInfo.name} description`}
    >
      <TruckBaseInfo truckInfo={truckInfo} />
      <TruckDetailedInfo truckInfo={truckInfo} />
    </section>
  );
}
