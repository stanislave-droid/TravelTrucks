"use client";

import Input from "@/components/ui/Input/Input";
import css from "./FilterPanel.module.css";
import Button from "@/components/ui/Button/Button";
import { IoMdClose } from "react-icons/io";
import { IFilterOptions } from "@/types/filter";
import RadioBtnList from "@/components/ui/RadioBtn/RadioBtnList";
import { CiMap } from "react-icons/ci";
import { useRouter } from "next/navigation";

interface FilterPanelProps {
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

  const handleSubmit = (formData: FormData) => {
    console.log(
      filtersNames.map((name) => formData.get(name)),
      formData.get("location"),
    );
  };

  const handleClearFilters = () => {
    router.push("/");
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
        <Button
          onClick={handleClearFilters}
          variant="white"
          className={css.clearFiltersBtn}
        >
          <IoMdClose size={24} />
          Clear filters
        </Button>
      </form>
    </aside>
  );
}
