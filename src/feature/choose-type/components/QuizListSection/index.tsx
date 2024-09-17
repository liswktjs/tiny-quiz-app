import Button from "@/shared/components/Button";
import QuizItem from "../QuizItem";
import { useQuizContext } from "@/shared/context/QuizContextProvider";
import useGetSuspenseQuizList from "@/shared/api/queries/useGetSuspenseQuizList";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/shared/constants/ROUTER";

const QuizListSection = () => {
  const router = useRouter();

  const { quizId, setQuizId } =
    useQuizContext();

  const { data } =
    useGetSuspenseQuizList({});

  return (
    <>
      <section className="grid grid-cols-3 gap-8 p-2 h-[600px] overflow-y-scroll">
        {data.map(
          ({
            author,
            title,
            created,
            id,
          }) => (
            <QuizItem
              author={author}
              title={title}
              date={created}
              onQuizItemClick={() => {
                setQuizId((pre) =>
                  pre === id ? null : id
                );
              }}
              isActive={quizId === id}
              key={id}
            />
          )
        )}
      </section>
      <Button
        className="text-2xl p-2 w-[325px]"
        disabled={quizId === null}
        variant="cobalt"
        onClick={() => {
          router.push(
            `${ROUTER.quiz}/${quizId}`
          );
        }}
      >
        start
      </Button>
    </>
  );
};

export default QuizListSection;
