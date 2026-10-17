import { ITruck } from "@/types/truck";
import css from "./TrucksCard.module.css";
import TrucksCard from "./TrucksCard";
import clsx from "clsx";

interface TrucksCardListProps {
  trucks: ITruck[];
  className?: string;
}

export default function TrucksCardList({
  trucks,
  className,
}: TrucksCardListProps) {
  return (
    <ul className={clsx(css.list, className)}>
      {trucks.map((truck) => (
        <TrucksCard key={truck.id} truckInfo={truck} />
      ))}
    </ul>
  );
}
