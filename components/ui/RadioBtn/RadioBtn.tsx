import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import css from "./RadioBtn.module.css";
import clsx from "clsx";

interface RadioBtnProps {
  name: string;
  keyValue: string;
  textValue: string;
  defaultChecked?: boolean;
}

export default function RadioBtn({
  name,
  keyValue,
  textValue,
  defaultChecked,
}: RadioBtnProps) {
  return (
    <label className={css.labelWrapper}>
      <input
        name={name}
        type="radio"
        value={keyValue}
        className={css.radioBtn}
        defaultChecked={defaultChecked}
      />
      <IoIosRadioButtonOff
        size={24}
        className={clsx(css.icon, css.radioBtnOffI)}
      />
      <IoIosRadioButtonOn
        size={24}
        className={clsx(css.icon, css.radioBtnOnI)}
      />
      <p className={css.text}>{textValue}</p>
    </label>
  );
}
