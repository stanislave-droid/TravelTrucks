import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { logErrorResponse } from "../../_utils/utils";
import { IFilterOptions } from "@/types/filter";
import { api } from "../../api";

export async function GET(req: NextRequest) {
  try {
    const response = await api.get<IFilterOptions>("/campers/filters");

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
