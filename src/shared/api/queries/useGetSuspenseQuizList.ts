import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ApiResponse,
  SuspenseQueryOptions,
} from "../type";
import { api } from "../utils";
import { QUIZ_QUERY_KEY } from "./key";
import { QuizItemType } from "@/shared/type/quiz";

export interface GetQuizListResponse {
  id: string;
  title: string;
  author: string;
  created: string;
  quizList: QuizItemType[];
}

const getQuizList = async (): Promise<
  GetQuizListResponse[]
> => {
  const response = await api.get<
    ApiResponse<GetQuizListResponse[]>
  >("/quiz");

  return response.data.data;
};

const useGetSuspenseQuizList = (
  options?: SuspenseQueryOptions<
    GetQuizListResponse[]
  >
) => {
  return useSuspenseQuery({
    queryFn: () => getQuizList(),
    queryKey: QUIZ_QUERY_KEY.quizList,
    ...options,
  });
};

export default useGetSuspenseQuizList;
