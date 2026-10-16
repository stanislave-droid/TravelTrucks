import { ITruck } from "@/types/truck";
import css from "./TrucksCard.module.css";
import TrucksCard from "./TrucksCard";

interface TrucksCardListProps {
  trucks: ITruck[];
}

export default function TrucksCardList({ trucks }: TrucksCardListProps) {
  return (
    <section>
      <ul className={css.list}>
        {trucks.map((truck) => (
          <TrucksCard key={truck.id} truckInfo={truck} />
        ))}
      </ul>
    </section>
  );
}
