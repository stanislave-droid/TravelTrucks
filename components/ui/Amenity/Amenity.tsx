import css from "./Amenity.module.css";

interface AmenityProps {
  name: string;
  icon?: React.ReactNode;
}

export default function Amenity({ name, icon }: AmenityProps) {
  return (
    <li className={css.item}>
      <p className={css.text}>
        {icon && <span className={css.icon}>{icon}</span>}
        {name}
      </p>
    </li>
  );
}
