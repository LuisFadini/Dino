import { ClassNameValue, twMerge } from "tailwind-merge";

export interface DivProps {
  children: React.ReactNode;
  className?: ClassNameValue;
}

export function BorderedContainer(props: DivProps) {
  return (
    <div
      className={twMerge(
        "border border-background-700 p-4 rounded-lg",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
