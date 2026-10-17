import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { IDetailedTruck } from "@/types/truck";
import { isAxiosError } from "axios";
import { logErrorResponse } from "../../_utils/utils";

interface FetchTruckProps {
  params: Promise<{ truckId: string }>;
}

export async function GET(req: NextRequest, { params }: FetchTruckProps) {
  try {
    const { truckId } = await params;
    const response = await api.get<IDetailedTruck>(`/campers/${truckId}`);

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
