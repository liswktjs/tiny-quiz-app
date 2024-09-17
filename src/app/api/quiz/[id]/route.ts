import quizData from "@/data/quiz.json";
import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;

  const quizItem = quizData.find(
    (item) => item.id === id
  );

  if (typeof quizItem === "undefined") {
    return NextResponse.json(
      {
        message: "not found quiz item",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { data: quizItem },
    { status: 200 }
  );
};
