import css from "./RadioBtn.module.css";
import RadioBtn from "./RadioBtn";
import {
  RADIO_BTN_DEFAULT_CHECKED,
  RADIO_BTN_LIST_NAMES,
  RADIO_BTN_TEXT_VALUES,
} from "@/lib/constants";

interface RadioBtnListProps {
  name: string;
  radioBtnValues: string[];
  defaultChecked?: string[];
}

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
