import * as Separator from "@radix-ui/react-separator";
import { ClassNameValue, twMerge } from "tailwind-merge";

export interface HorizontalSeparatorProps {
  className?: ClassNameValue;
}

export function HorizontalSeparator(props: HorizontalSeparatorProps) {
  return (
    <Separator.Root
      orientation="horizontal"
      decorative
      className={twMerge("bg-background-700 w-[1px] h-full", props.className)}
    />
  );
}