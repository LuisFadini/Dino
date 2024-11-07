import { MouseEventHandler } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export type ButtonVariants = "outline" | "primary";

export interface ButtonProps {
  variant: ButtonVariants;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: ClassNameValue;
}

export function Button(props: ButtonProps) {
  const defaultClassNames =
    "inline-flex items-center justify-center text-lg font-medium transition-colors focus-visible:outline-none rounded-lg shadow-md duration-300";

  const variantClassName: Record<ButtonVariants, string> = {
    outline:
      "border border-background-700 text-text-100 p-3 bg-transparent hover:border-secondary-800 hover:bg-secondary-800 hover:text-text-100",
    primary:
      "text-text-100 bg-primary-500 p-3 border border-background-700 hover:bg-primary-700 hover:text-text-100",
  };

  return (
    <button
      className={twMerge(
        defaultClassNames,
        variantClassName[props.variant],
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}