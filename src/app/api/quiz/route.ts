import quizData from "@/data/quiz.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(
    {
      data: quizData,
    },
    {
      status: 200,
    }
  );
};
