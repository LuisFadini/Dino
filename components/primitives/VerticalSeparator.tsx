import * as Separator from "@radix-ui/react-separator";
import { ClassNameValue, twMerge } from "tailwind-merge";

export interface VerticalSeparatorProps {
  className?: ClassNameValue;
}

export function VerticalSeparator(props: VerticalSeparatorProps) {
  return (
    <Separator.Root
      orientation="vertical"
      decorative
      className={twMerge("bg-background-700 w-[1px] h-full", props.className)}
    />
  );
}