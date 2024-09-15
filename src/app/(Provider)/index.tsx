"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { getQueryClient } from "./getQueryClient";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

const Provider = ({
  children,
}: PropsWithChildren) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <ReactQueryStreamedHydration>
        {children}
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};

export default Provider;
