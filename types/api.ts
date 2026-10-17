import { ITruck } from "./truck";

export interface ApiResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface CleanApiResponse {
  message: string;
}

export interface TrucksApiResponse extends ApiResponse {
  campers: ITruck[];
}

export interface IFetchTrucksParams {
  page?: number;
  perPage?: number;
  location?: string;
  form: string;
  transmission: string;
  engine: string;
}
