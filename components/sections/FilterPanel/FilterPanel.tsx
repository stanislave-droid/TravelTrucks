"use client";

import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { IoMdClose } from "react-icons/io";
import { IFilterOptions } from "@/types/filter";
import RadioBtnList from "@/components/ui/RadioBtn/RadioBtnList";
import { CiMap } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "@/components/ui/Link/Link";
import {
  FILTERS_SEARCHPARAMS_EQUAL,
  TRUCKS_DEFAULT_PAGE_PATH,
} from "@/lib/constants";
import css from "./FilterPanel.module.css";

export interface FilterPanelProps {
  filterOptions: IFilterOptions;
  location?: string;
  defaultChecked?: string[];
}

export default function FilterPanel({
  filterOptions,
  location,
  defaultChecked,
}: FilterPanelProps) {
  const filtersNames = Object.keys(filterOptions);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (formData: FormData) => {
    const filters = filtersNames.map((name) => ({
      [FILTERS_SEARCHPARAMS_EQUAL[name]]: formData.get(name),
    }));
    const location = formData.get("location") || "";

    const params = new URLSearchParams(searchParams.toString());

    filters.forEach((filter) => {
      for (const key in filter) {
        params.set(key, filter[key] as string);
      }
    });

    if (location) {
      params.set("location", location as string);
    } else {
      params.delete("location");
    }

    router.push(`${TRUCKS_DEFAULT_PAGE_PATH}?${params}`);
  };

  return (
    <aside aria-label="Filter Panel" className={css.filterPanel}>
      <form action={handleSubmit}>
        <div className={css.locationInputWrapper} aria-label="Choose location">
          <p className={css.locationLabel}>Location</p>
          <Input
            handleInput={() => null}
            defaultValue={location}
            className={css.locationInput}
            placeholder="City"
            name="location"
            type="text"
          >
            <CiMap className={css.locationInputIcon} size={24} />
          </Input>
        </div>
        <h3 className={css.filtersTitle}>Filters</h3>
        <ul className={css.filtersList} aria-label="Choose filters">
          {filtersNames.map((name) => (
            <RadioBtnList
              key={name}
              name={name}
              radioBtnValues={filterOptions[name]}
              defaultChecked={defaultChecked}
            />
          ))}
        </ul>
        <Button onClick={() => null} type="submit" className={css.submitBtn}>
          Search
        </Button>
        <Link
          href={TRUCKS_DEFAULT_PAGE_PATH}
          variant="white"
          className={css.clearFiltersBtn}
        >
          <IoMdClose size={24} />
          Clear filters
        </Link>
      </form>
    </aside>
  );
}
