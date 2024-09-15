import Link from "next/link";
import cn from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  isActive?: boolean;
  href: string;
}

const Tab = ({
  href,
  isActive,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Link href={href}>
      <span
        className={cn(
          "text-base text-white hover:bg-cobalt_400 hover:border-b hover:border-b-white p-2 rounded-md transition-all",
          {
            "bg-cobalt_400 border-b-white border-b":
              isActive,
          }
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export default Tab;
