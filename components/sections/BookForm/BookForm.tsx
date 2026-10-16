"use client";

import Input from "@/components/ui/Input/Input";
import css from "./BookForm.module.css";
import Button from "@/components/ui/Button/Button";
import { useMutation } from "@tanstack/react-query";

export default function BookForm() {
  const { mutate } = useMutation({});

  const handleSubmit = (formData: FormData) => {};

  return (
    <section aria-label="Booking form" className={css.section}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form action={handleSubmit}>
        <Input
          handleInput={() => null}
          placeholder="Name*"
          onErrorLabel="Name*"
          type="text"
          required
          className={css.name}
        />
        <Input
          handleInput={() => null}
          placeholder="Email*"
          onErrorLabel="Email*"
          type="email"
          required
          className={css.email}
        />
        <Button onClick={() => null} type="submit" className={css.submitBtn}>
          Send
        </Button>
      </form>
    </section>
  );
}
