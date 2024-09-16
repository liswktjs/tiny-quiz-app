import cn from "classnames";

interface Props {
  title: string;
  author: string;
  date: string;
  onQuizItemClick: () => void;
  isActive?: boolean;
}

const QuizItem = ({
  title,
  author,
  date,
  onQuizItemClick,
  isActive = false,
}: Props) => {
  return (
    <div
      className={cn(
        "w-[325px] flex flex-col gap-4 rounded-lg outline  p-4 hover:outline-cobalt_500 hover:cursor-pointer hover:bg-cobalt_50 transition-all",
        {
          "outline-cobalt_500 outline-2 bg-cobalt_50":
            isActive,
          "outline-1 outline-charcoal_200":
            !isActive,
        }
      )}
      onClick={onQuizItemClick}
    >
      <h3 className="text-2xl font-bold w-50 truncate">
        {title}
      </h3>

      <div className="flex flex-col gap">
        <div className="text-md text-charcoal_500">
          {author}
        </div>
        <span className="text-sm text-charcoal_400">
          {date}
        </span>
      </div>
    </div>
  );
};

export default QuizItem;
