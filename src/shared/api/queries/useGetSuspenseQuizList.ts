import {
  QueryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { ApiResponse } from "../type";
import { api } from "../utils";
import { QUIZ_QUERY_KEY } from "./key";

export interface QuizItemType {
  id: string;
  quiz: string;
  selector: {
    id: number;
    content: string;
  }[];
  answerId: number;
}

export interface GetQuizListResponse {
  id: string;
  title: string;
  author: string;
  created: string;
  quizList: QuizItemType[];
}

interface GetQuizListRequest {
  options?: QueryOptions<
    GetQuizListResponse[]
  >;
}

const getQuizList = async (): Promise<
  GetQuizListResponse[]
> => {
  const response = await api.get<
    ApiResponse<GetQuizListResponse[]>
  >("/quiz");

  return response.data.data;
};

const useGetSuspenseQuizList = ({
  options = {},
}: GetQuizListRequest) => {
  return useSuspenseQuery({
    queryFn: () => getQuizList(),
    queryKey: QUIZ_QUERY_KEY.quizList,
    ...options,
  });
};

export default useGetSuspenseQuizList;
