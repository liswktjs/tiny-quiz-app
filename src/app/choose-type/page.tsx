import ChooseTypePage from "@/pages/ChooseType";

const ChooseType = () => {
  return (
    <main className="flex flex-col w-full h-full">
      <section className="w-full bg-charcoal_50 p-10">
        <h1 className="text-5xl font-black text-black_500 text-center">
          Select Quiz Type
        </h1>
      </section>
      <ChooseTypePage />
    </main>
  );
};

export default ChooseType;
