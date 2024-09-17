import { QuizItemType } from "@/shared/type/quiz";
import { useQuery } from "@tanstack/react-query";
import { api } from "../utils";
import {
  ApiResponse,
  QueryOptions,
} from "../type";
import { QUIZ_QUERY_KEY } from "./key";

interface GetQuizDetailResponse {
  id: string;
  title: string;
  author: string;
  created: string;
  quizList: QuizItemType[];
}

interface GetQuizDetailRequest {
  quizId: string;
}

const getQuizDetail = async ({
  quizId,
}: GetQuizDetailRequest): Promise<GetQuizDetailResponse> => {
  const response = await api.get<
    ApiResponse<GetQuizDetailResponse>
  >(`/quiz/${quizId}`);

  return response.data.data;
};

const useGetQuizDetail = (
  request: GetQuizDetailRequest,
  options?: QueryOptions<GetQuizDetailResponse>
) => {
  return useQuery({
    queryFn: () =>
      getQuizDetail({
        quizId: request.quizId,
      }),
    queryKey: QUIZ_QUERY_KEY.quizDetail(
      request.quizId
    ),
    ...options,
  });
};

export default useGetQuizDetail;
