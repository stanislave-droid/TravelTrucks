import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { logErrorResponse } from "../_utils/utils";
import { api } from "../api";
import { TrucksApiResponse } from "@/types/api";
import { DEFAULT_FILTERS } from "@/lib/constants";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 4;
    const location = searchParams.get("location");
    const form = searchParams.get("form") || DEFAULT_FILTERS.form;
    const transmission =
      searchParams.get("transmission") || DEFAULT_FILTERS.transmission;
    const engine = searchParams.get("engine") || DEFAULT_FILTERS.engine;

    const response = await api.get<TrucksApiResponse>("/campers", {
      params: {
        page,
        perPage,
        location,
        form,
        transmission,
        engine,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        {
          error: error.message,
          response: error.response?.data,
        },
        { status: error.response?.status ?? 500 },
      );
    }

    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
