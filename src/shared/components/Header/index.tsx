"use client";

import { ROUTER } from "../../constants/ROUTER";
import { usePathname } from "next/navigation";
import Tab from "./Tab";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-20 bg-cobalt_500 flex justify-between items-center px-5">
      <h1 className="text-4xl text-white font-bold">
        Quiz App
      </h1>

      <div className="flex gap-2">
        <Tab
          href={ROUTER.home}
          isActive={
            pathname === ROUTER.home
          }
        >
          Home
        </Tab>
        <Tab
          href={ROUTER.createQuiz}
          isActive={
            pathname ===
            ROUTER.createQuiz
          }
        >
          Create Quiz
        </Tab>
      </div>
    </header>
  );
};

export default Header;
