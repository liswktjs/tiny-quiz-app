import {
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "classnames";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "cobalt";
}

const Button = ({
  variant = "black",
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={cn(
        `${className} rounded-lg border-none disabled:bg-charcoal_100 disabled:text-charcoal_400 disabled:cursor-not-allowed hover:cursor-pointer`,
        {
          "bg-black_500 text-white hover:bg-black_400":
            variant === "black",
          "bg-cobalt_500 text-white hover:bg-cobalt_400":
            variant === "cobalt",
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
