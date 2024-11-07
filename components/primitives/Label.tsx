import * as RadixLabel from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";

export function Label({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <RadixLabel.Root className={twMerge("flex flex-row gap-2 text-wrap", className)} {...props}>
      {children}
    </RadixLabel.Root>
  );
}
