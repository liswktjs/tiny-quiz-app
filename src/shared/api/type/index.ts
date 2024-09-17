import {
  UseQueryOptions,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

export interface ApiResponse<
  T = unknown
> {
  statusCode: 200;
  message: string;
  data: T;
}

export type QueryOptions<T> = Omit<
  UseQueryOptions<T>,
  "queryKey" | "queryFn"
>;

export type SuspenseQueryOptions<T> =
  Omit<
    UseSuspenseQueryOptions<T>,
    "queryKey" | "queryFn"
  >;
