import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { logErrorResponse } from "../../_utils/utils";
import { CleanApiResponse } from "@/types/api";

interface BookProps {
  params: Promise<{ truckId: string }>;
}

export async function POST(req: NextRequest, { params }: BookProps) {
  try {
    const { truckId } = await params;
    const content = await req.json();

    const response = await api.post<CleanApiResponse>(
      `/campers/${truckId}/booking-requests`,
      content,
    );

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
