import Spinner from "@/components/ui/Spinner/Spinner";
import css from "./LoadModal.module.css";

export default function LoadModal() {
  return (
    <div className={css.background}>
      <div className={css.foreground}>
        <Spinner className={css.spinner} />
        <div className={css.textWrapper}>
          <p className={css.title}>Loading tracks...</p>
          <p className={css.text}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
}
