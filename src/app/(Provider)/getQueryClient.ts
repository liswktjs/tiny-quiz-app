import {
  isServer,
  QueryClient,
} from "@tanstack/react-query";

export const makeQueryClient = () => {
  return new QueryClient();
};

let browserQueryClient:
  | QueryClient
  | undefined = undefined;

export const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient =
      makeQueryClient();
  }
  return browserQueryClient;
};
