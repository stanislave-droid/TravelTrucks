import { IItemsNames } from "@/types/list";
import css from "./RadioBtn.module.css";
import RadioBtn from "./RadioBtn";

interface RadioBtnListProps {
  name: string;
  radioBtnValues: string[];
  defaultChecked?: string[];
}

const RADIO_BTN_LIST_NAMES: IItemsNames = {
  forms: "Camper form",
  transmissions: "Engine",
  engines: "Transmission",
};

const RADIO_BTN_TEXT_VALUES: IItemsNames = {
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

const RADIO_BTN_DEFAULT_CHECKED: string[] = [
  "panel_van",
  "petrol",
  "automatic",
];

/*
"forms": [
    "alcove",
    "panel_van",
    "integrated",
    "semi_integrated"
  ],
  "transmissions": [
    "automatic",
    "manual"
  ],
  "engines": [
    "diesel",
    "petrol",
    "hybrid",
    "electric"
  ]*/

export default function RadioBtnList({
  name,
  radioBtnValues,
  defaultChecked,
}: RadioBtnListProps) {
  return (
    <li
      className={css.listWrapper}
      aria-label={`Filters for ${RADIO_BTN_LIST_NAMES[name]}`}
    >
      <p className={css.listName}>{RADIO_BTN_LIST_NAMES[name]}</p>
      <ul className={css.list}>
        {radioBtnValues.map((value) => (
          <RadioBtn
            key={value}
            name={name}
            keyValue={value}
            textValue={RADIO_BTN_TEXT_VALUES[value]}
            defaultChecked={
              defaultChecked
                ? defaultChecked?.includes(value)
                  ? true
                  : false
                : RADIO_BTN_DEFAULT_CHECKED.includes(value)
                  ? true
                  : false
            }
          />
        ))}
      </ul>
    </li>
  );
}
