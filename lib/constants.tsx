import { IItemsNames, IListOfElements } from "@/types/list";
import { FaCar } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { BsFuelPump } from "react-icons/bs";

export const TRUCKS_DEFAULT_PAGE_PATH = "/trucks";

/* ---------------- AMENITIES ---------------- */

export const AMENITIES_ICONS: IListOfElements = {
  alcove: <FaCar size={20} />,
  automatic: <LiaSitemapSolid size={20} />,
  petrol: <BsFuelPump size={20} />,
};

export const AMENITIES_NAMES: IItemsNames = {
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
  microwave: "Microwave",
};

/* ---------------- RADIO_BTN ---------------- */

export const RADIO_BTN_LIST_NAMES: IItemsNames = {
  forms: "Camper form",
  transmissions: "Transmission",
  engines: "Engine",
};

export const RADIO_BTN_TEXT_VALUES: IItemsNames = {
  alcove: "Alcove",
  panel_van: "Panel Van",
  integrated: "Integrated",
  semi_integrated: "Semi Integrated",
  automatic: "Automatic",
  manual: "Manual",
  diesel: "Diesel",
  petrol: "Petrol",
  hybrid: "Hybrid",
  electric: "Electric",
};

export const RADIO_BTN_DEFAULT_CHECKED: string[] = [
  "panel_van",
  "petrol",
  "automatic",
];

/* ---------------- FILTERS ---------------- */

export const DEFAULT_FILTERS = {
  form: "panel_van",
  transmission: "automatic",
  engine: "petrol",
};

export const FILTERS_SEARCHPARAMS_EQUAL: IItemsNames = {
  forms: "form",
  transmissions: "transmission",
  engines: "engine",
};
