import Button from "@/shared/components/Button";
import Header from "@/shared/components/Header";
import { ROUTER } from "@/shared/constants/ROUTER";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100%-20rem)] flex justify-center items-center">
        <section className="w-fit flex flex-col gap-16">
          <h1 className="text-5xl text-black_500 font-black">
            Welcome to Quiz App
          </h1>
          <Link
            href={ROUTER.chooseType}
          >
            <Button
              className="text-2xl p-2 w-full"
              variant="cobalt"
            >
              Start
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
