import { IFilterOptions } from "@/types/filter";
import { axiosClient as api } from "./api";
import { IFetchTrucksParams, TrucksApiResponse } from "@/types/api";
import { IDetailedTruck } from "@/types/truck";
import { IFeedback } from "@/types/feedback";

export async function fetchTrucks(params: IFetchTrucksParams) {
  const { data } = await api.get<TrucksApiResponse>("/trucks", {
    params,
  });
  return data;
}

export async function fetchFilters() {
  const { data } = await api.get<IFilterOptions>("/campers/filters");
  return data;
}

export async function fetchTruck(truckId: string) {
  const { data } = await api.get<IDetailedTruck>(`/trucks/${truckId}`);
  return data;
}

export async function fetchFeedbacks(truckId: string) {
  const { data } = await api.get<IFeedback[]>(`/feedbacks/${truckId}`);
  return data;
}
