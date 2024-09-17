"use client";

import QuizListSection from "@/feature/choose-type/components/QuizListSection";
import { Suspense } from "react";
import ChooseTypeFallback from "./Fallback";

const ChooseTypePage = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center pt-10">
      <Suspense
        fallback={
          <ChooseTypeFallback />
        }
      >
        <QuizListSection />
      </Suspense>
    </div>
  );
};

export default ChooseTypePage;
