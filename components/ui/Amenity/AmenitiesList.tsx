import { AMENITIES_ICONS, AMENITIES_NAMES } from "@/lib/constants";
import Amenity from "./Amenity";
import css from "./Amenity.module.css";
import clsx from "clsx";

interface AmenitiesListProps {
  amenities: string[];
  showIcons?: boolean;
  showOnlyLine?: boolean;
}

export default function AmenitiesList({
  amenities,
  showIcons,
  showOnlyLine,
}: AmenitiesListProps) {
  const amenitiesList = amenities.map((value) =>
    showIcons ? (
      <Amenity
        key={value}
        name={AMENITIES_NAMES[value]}
        icon={AMENITIES_ICONS[value]}
      />
    ) : (
      <Amenity key={value} name={AMENITIES_NAMES[value]} />
    ),
  );

  return (
    <ul
      className={clsx(css.amenitiesList, showOnlyLine ? css.showOnlyLine : "")}
    >
      {amenitiesList}
    </ul>
  );
}
