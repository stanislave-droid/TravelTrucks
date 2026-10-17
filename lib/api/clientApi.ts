import { axiosClient as api } from "./api";
import {
  CleanApiResponse,
  IFetchTrucksParams,
  TrucksApiResponse,
} from "@/types/api";

export async function fetchTrucks(params: IFetchTrucksParams) {
  const { data } = await api.get<TrucksApiResponse>("/trucks", { params });
  return data;
}

interface BookTruckProps {
  truckId: string;
  name: string;
  email: string;
}

export async function bookTruck({ truckId, name, email }: BookTruckProps) {
  const { data } = await api.post<CleanApiResponse>(`/book/${truckId}`, {
    name,
    email,
  });
  return data;
}
