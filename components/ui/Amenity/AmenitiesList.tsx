import { FaCar } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";
import Amenity from "./Amenity";
import css from "./Amenity.module.css";
import { IItemsNames, IListOfElements } from "@/types/list";

interface AmenitiesListProps {
  amenities: string[];
  showIcons?: boolean;
}

const AMENITIES_ICONS: IListOfElements = {
  alcove: <FaCar size={20} />,
  automatic: <LiaSitemapSolid size={20} />,
  petrol: <BsFuelPump size={20} />,
};

const AMENITIES_NAMES: IItemsNames = {
  alcove: "Alcove",
  radio: "Radio",
  kitchen: "Kitchen",
  petrol: "Petrol",
  ac: "AC",
  automatic: "Automatic",
  tv: "TV",
  bathroom: "Bathroom",
  refrigerator: "Refrigerator",
  gas: "Gas",
  water: "Water",
};

export default function AmenitiesList({
  amenities,
  showIcons,
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

  return <ul className={css.amenitiesList}>{amenitiesList}</ul>;
}
