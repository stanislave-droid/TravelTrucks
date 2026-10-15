"use client";
import clsx from "clsx";
import css from "./page.module.css";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Link from "@/components/ui/Link/Link";
import RatingStars from "@/components/ui/RatingStars/RatingStars";
import Spinner from "@/components/ui/Spinner/Spinner";

import { showError, showInfo } from "@/components/ui/Toast/Toast";
import Logo from "@/components/ui/Logo/Logo";
import AmenitiesList from "@/components/ui/Amenity/AmenitiesList";
import RadioBtn from "@/components/ui/RadioBtn/RadioBtn";
import RadioBtnList from "@/components/ui/RadioBtn/RadioBtnList";
import FilterPanel from "@/components/sections/FilterPanel/FilterPanel";
import TrucksCard from "@/components/sections/TrucksCard/TrucksCard";
import TrucksCardList from "@/components/sections/TrucksCard/TrucksCardList";
import TrucksNotFound from "@/components/sections/TrucksCard/TruckNotFound";

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
        <ul>
          <TrucksCard
            truckInfo={{
              id: "cmqv06i21008dyyxtssa1wfdz",
              name: "Dusty Trail 25P",
              price: 10500,
              rating: 4.4,
              location: "Ukraine, Odesa",
              description:
                "Hit the open road in the Dusty Trail 25P, a petrol-powered alcove motorhome with a warm, well-appointed interior. Designed for couples or families of four, it combines a proven layout with a solid amenity set and smooth automatic transmission for effortless long-distance driving.",
              form: "alcove",
              length: "7.1m",
              width: "2.5m",
              height: "3.6m",
              tank: "180l",
              consumption: "25l/100km",
              transmission: "automatic",
              engine: "petrol",
              amenities: [
                "bathroom",
                "kitchen",
                "tv",
                "radio",
                "refrigerator",
                "gas",
                "water",
              ],
              createdAt: "2026-06-26T14:05:05.641Z",
              updatedAt: "2026-06-26T14:05:05.641Z",
              coverImage:
                "https://ac.goit.global/fullstack/career/campers/el-monte-class-c-small-c/el-monte-class-c-small-c-1.jpg",
              totalReviews: 2,
            }}
          />
        </ul>
        <TrucksCardList
          trucks={[
            {
              id: "cmqv06hwy0007yyxt7z2vjb4y",
              name: "Cruise America C-21",
              price: 8000,
              rating: 4.3,
              location: "Ukraine, Poltava",
              description:
                "Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.",
              form: "alcove",
              length: "6.4m",
              width: "2.34m",
              height: "3.72m",
              tank: "151l",
              consumption: "21l/100km",
              transmission: "automatic",
              engine: "petrol",
              amenities: [
                "ac",
                "bathroom",
                "kitchen",
                "radio",
                "refrigerator",
                "microwave",
                "gas",
                "water",
              ],
              createdAt: "2026-06-26T14:05:05.458Z",
              updatedAt: "2026-06-26T14:05:05.458Z",
              coverImage:
                "https://ac.goit.global/fullstack/career/campers/cruise-america-c-21/cruise-america-c-21-1.jpg",
              totalReviews: 2,
            },
            {
              id: "cmqv06i21008dyyxtssa1wfdz",
              name: "Dusty Trail 25P",
              price: 10500,
              rating: 4.4,
              location: "Ukraine, Odesa",
              description:
                "Hit the open road in the Dusty Trail 25P, a petrol-powered alcove motorhome with a warm, well-appointed interior. Designed for couples or families of four, it combines a proven layout with a solid amenity set and smooth automatic transmission for effortless long-distance driving.",
              form: "alcove",
              length: "7.1m",
              width: "2.5m",
              height: "3.6m",
              tank: "180l",
              consumption: "25l/100km",
              transmission: "automatic",
              engine: "petrol",
              amenities: [
                "ac",
                "bathroom",
                "kitchen",
                "tv",
                "radio",
                "refrigerator",
                "gas",
                "water",
              ],
              createdAt: "2026-06-26T14:05:05.641Z",
              updatedAt: "2026-06-26T14:05:05.641Z",
              coverImage:
                "https://ac.goit.global/fullstack/career/campers/el-monte-class-c-small-c/el-monte-class-c-small-c-1.jpg",
              totalReviews: 2,
            },
            {
              id: "cmqv06i2e008yyyxtohrozy6y",
              name: "Terrace Alcove 25P",
              price: 10000,
              rating: 4.4,
              location: "Ukraine, Kyiv",
              description:
                "The Terrace Alcove 25P is a mid-range petrol alcove motorhome with a clean, practical interior and a smooth automatic gearbox. It's a great all-rounder for families seeking a first motorhome experience or a reliable vehicle for a classic summer road trip.",
              form: "alcove",
              length: "6.9m",
              width: "2.5m",
              height: "3.6m",
              tank: "170l",
              consumption: "23l/100km",
              transmission: "automatic",
              engine: "petrol",
              amenities: [
                "ac",
                "bathroom",
                "kitchen",
                "radio",
                "refrigerator",
                "microwave",
                "water",
              ],
              createdAt: "2026-06-26T14:05:05.654Z",
              updatedAt: "2026-06-26T14:05:05.654Z",
              coverImage:
                "https://ac.goit.global/fullstack/career/campers/pathfinder-voyager/pathfinder-voyager-1.jpg",
              totalReviews: 2,
            },
          ]}
        />
        <TrucksNotFound />
      </div>
    </main>
  );
}
