import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface QuizRecordItemType {
  id: number;
  userAnswer: string;
  answer: string;
}

interface QuizContextType {
  quizId: string | null;
  setQuizId: Dispatch<
    SetStateAction<string | null>
  >;
  record: QuizRecordItemType[];
  setRecord: Dispatch<
    SetStateAction<QuizRecordItemType[]>
  >;
}

const QuizContext =
  createContext<QuizContextType | null>(
    null
  );

const QuizContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [quizId, setQuizId] =
    useState<null | string>(null);
  const [record, setRecord] = useState<
    QuizRecordItemType[]
  >([]);

  return (
    <QuizContext.Provider
      value={{
        quizId,
        setQuizId,
        record,
        setRecord,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(
    QuizContext
  );

  if (!context) {
    throw new Error(
      "quiz context is not exist"
    );
  }

  const {
    quizId,
    setQuizId,
    record,
    setRecord,
  } = context;

  return {
    quizId,
    setQuizId,
    record,
    setRecord,
  };
};

export default QuizContextProvider;
