export interface ApiResponse<
  T = unknown
> {
  statusCode: 200;
  message: string;
  data: T;
}
