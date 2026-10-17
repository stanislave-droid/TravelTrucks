"use client";

import LoadModal from "@/components/sections/LoadModal/LoadModal";
import TrucksNotFound from "@/components/sections/TrucksCard/TruckNotFound";
import TrucksCardList from "@/components/sections/TrucksCard/TrucksCardList";
import Button from "@/components/ui/Button/Button";
import { fetchTrucks } from "@/lib/api/clientApi";
import { DEFAULT_FILTERS } from "@/lib/constants";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import css from "./Trucks.module.css";
import Modal from "@/components/ui/Modal/Modal";

export default function ClientTrucksPage() {
  const params = useSearchParams();

  const searchParams = new URLSearchParams(params.toString());
  const location = searchParams.get("location") || "";
  const form = searchParams.get("form") || DEFAULT_FILTERS.form;
  const transmission =
    searchParams.get("transmission") || DEFAULT_FILTERS.transmission;
  const engine = searchParams.get("engine") || DEFAULT_FILTERS.engine;

  const { data, hasNextPage, fetchNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["trucks", location, form, transmission, engine],
      queryFn: ({ pageParam }) =>
        fetchTrucks({
          page: pageParam,
          perPage: 4,
          location,
          form,
          transmission,
          engine,
        }),
      initialPageParam: 1,
      initialData: { pages: [], pageParams: [] },
      getNextPageParam: (lastPage) =>
        lastPage.totalPages >= lastPage.page + 1
          ? lastPage.page + 1
          : undefined,
      placeholderData: keepPreviousData,
      refetchOnMount: false,
    });

  const trucks = data.pages.flatMap((page) => page.campers);

  return (
    <>
      {(isFetching || isLoading) && (
        <Modal>
          <LoadModal />
        </Modal>
      )}
      {trucks.length == 0 ? (
        <TrucksNotFound />
      ) : (
        <section>
          <TrucksCardList trucks={trucks} className={css.trucksList} />
          {hasNextPage && (
            <Button
              disabled={isLoading || isFetching}
              onClick={() => fetchNextPage()}
              className={css.loadMore}
              variant="white"
            >
              Load more
            </Button>
          )}
        </section>
      )}
    </>
  );
}
