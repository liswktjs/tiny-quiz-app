import Button from "@/shared/components/Button";

const ChooseTypeFallback = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center pt-10">
      <div className="grid grid-cols-3 gap-8">
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
        <div className="w-[325px] h-[124px] rounded-lg bg-charcoal_100 animate-pulse" />
      </div>
      <Button
        className="w-[325px] h-[50px] animate-pulse"
        disabled
      />
    </div>
  );
};

export default ChooseTypeFallback;
