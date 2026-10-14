"use client";
import clsx from "clsx";
import css from "./page.module.css";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Link from "@/components/ui/Link/Link";
import RatingStars from "@/components/ui/RatingStars/RatingStars";
import Spinner from "@/components/ui/Spinner/Spinner";

import showToast, { showError, showInfo } from "@/components/ui/Toast/Toast";
import Logo from "@/components/ui/Logo/Logo";
import Amenity from "@/components/ui/Amenity/Amenity";
import { FaCar } from "react-icons/fa";
import AmenitiesList from "@/components/ui/Amenity/AmenitiesList";
import RadioBtn from "@/components/ui/RadioBtn/RadioBtn";
import RadioBtnList from "@/components/ui/RadioBtn/RadioBtnList";
import FilterPanel from "@/components/sections/FilterPanel/FilterPanel";

export default function Home() {
  return (
    <main className={clsx("container", css.main)}>
      <Logo />
      <div className={clsx("container")}>
        <div className={css.container}>
          <Button onClick={() => ""}>Test</Button>
          <Button onClick={() => ""} variant="white">
            Test white
          </Button>
        </div>
        <div className={css.container}>
          <Link href="#">Test link</Link>
          <Link href="#" active>
            Test link active
          </Link>
          <Link href="#" variant="green">
            Test link green
          </Link>
        </div>
        <Input
          handleInput={() => null}
          placeholder="Input some text"
          type="email"
          onErrorLabel="Test*"
        ></Input>
        <RatingStars value={4} />
        <Spinner />
        <div className={css.container}>
          <Button
            onClick={() => showError("Something happend | try again later")}
          >
            Show Toast Error
          </Button>
          <Button onClick={() => showInfo("Do you know?")}>
            Show Toast Info
          </Button>
        </div>
        <div className={css.container}>
          <AmenitiesList amenities={["alcove", "automatic", "petrol"]} />
          <AmenitiesList
            amenities={["alcove", "automatic", "petrol", "ac"]}
            showIcons
          />
        </div>
        <div className={css.container}>
          <RadioBtn name="test" keyValue="test1" textValue="Alcove" />
          <RadioBtn name="test" keyValue="test2" textValue="Panel Van" />
        </div>
        <ul className={css.container}>
          <RadioBtnList
            name="forms"
            radioBtnValues={[
              "alcove",
              "panel_van",
              "integrated",
              "semi_integrated",
            ]}
          />
          <RadioBtnList
            name="engines"
            radioBtnValues={["diesel", "petrol", "hybrid", "electric"]}
          />
          <RadioBtnList
            name="transmissions"
            radioBtnValues={["automatic", "manual"]}
          />
        </ul>
        <FilterPanel
          filterOptions={{
            forms: ["alcove", "panel_van", "integrated", "semi_integrated"],
            transmissions: ["automatic", "manual"],
            engines: ["diesel", "petrol", "hybrid", "electric"],
          }}
        />
      </div>
    </main>
  );
}
