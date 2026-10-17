"use client";

import Input from "@/components/ui/Input/Input";
import css from "./BookForm.module.css";
import Button from "@/components/ui/Button/Button";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { bookTruck } from "@/lib/api/clientApi";
import { showError, showInfo } from "@/components/ui/Toast/Toast";

interface BookFormProps {
  truckId: string;
  className?: string;
}

export default function BookForm({ className, truckId }: BookFormProps) {
  const { mutate } = useMutation({
    mutationKey: ["BookTruck", truckId],
    mutationFn: ({ name, email }: { name: string; email: string }) =>
      bookTruck({ truckId, name, email }),
    onSuccess: (data) => showInfo(data.message),
    onError: (error) => {
      console.error(error);
      showError(error.message);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    mutate({ name, email });
  };

  return (
    <section aria-label="Booking form" className={clsx(css.section, className)}>
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
          name="name"
          required
          className={css.name}
        />
        <Input
          handleInput={() => null}
          placeholder="Email*"
          onErrorLabel="Email*"
          type="email"
          name="email"
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
