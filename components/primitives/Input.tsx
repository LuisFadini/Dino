import { twMerge } from "tailwind-merge";

export function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  if(type === "number") {
    props.inputMode="numeric"
  }

  return (
    <input
      className={twMerge(
        "bg-background-950 p-1 border border-background-700 rounded-lg text-text-200 outline-none focus:outline-background-300",
        className
      )}
      {...props}
    />
  );
}
