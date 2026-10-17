import FilterPanel from "@/components/sections/FilterPanel/FilterPanel";
import { fetchFilters, fetchTrucks } from "@/lib/api/serverApi";
import { DEFAULT_FILTERS } from "@/lib/constants";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import css from "./Trucks.module.css";
import ClientTrucksPage from "./Trucks.client";
import clsx from "clsx";
import { CreateQueryClient } from "@/lib/providers/TanStackQuery";

export const metadata: Metadata = {
  title: "TravelTruck catalog",
  description: "Service for searching trucks",
  openGraph: {
    title: "TravelTruck catalog",
    description: "Service for searching trucks",
    images: [
      {
        url: "/opengraph-image.jpg",
        height: 1200,
        width: 630,
        alt: "TravelTruck",
      },
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: "article",
  },
};

interface TrucksPageParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TrucksPage({ searchParams }: TrucksPageParams) {
  const queryClient = CreateQueryClient();
  const SearchParams = await searchParams;

  const page = Number(SearchParams.page || 1);
  const perPage = Number(SearchParams.perPage || 4);
  const location = (SearchParams.location as string) || "";
  const form = (SearchParams.form as string) || DEFAULT_FILTERS.form;
  const transmission =
    (SearchParams.transmission as string) || DEFAULT_FILTERS.transmission;
  const engine = (SearchParams.engine as string) || DEFAULT_FILTERS.engine;

  const filters = await queryClient.query({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
  });

  await queryClient.infiniteQuery({
    queryKey: ["trucks", location, form, transmission, engine],
    queryFn: () =>
      fetchTrucks({ page, perPage, location, form, transmission, engine }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className={clsx("container", css.main)}>
        <FilterPanel
          filterOptions={filters}
          location={location}
          defaultChecked={[form, transmission, engine]}
        />
        <ClientTrucksPage />
      </main>
    </HydrationBoundary>
  );
}
