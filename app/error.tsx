"use client";

import css from "./error-page.module.css";
import { MdError } from "react-icons/md";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className={css.wrapper}>
      <p className={css.errorText}>
        Error occured while loading:
        <span className={css.errorMessage}> {error.message}</span>
      </p>
      <MdError />
    </div>
  );
}
