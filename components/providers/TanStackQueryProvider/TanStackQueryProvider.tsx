"use client";

import { CreateQueryClient } from "@/lib/providers/TanStackQuery";
import {
  environmentManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface TanStackQueryProviderProps {
  children: React.ReactNode;
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (environmentManager.isServer()) {
    return CreateQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = CreateQueryClient();
    return browserQueryClient;
  }
}

const TanStackQueryProvider = ({ children }: TanStackQueryProviderProps) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default TanStackQueryProvider;
