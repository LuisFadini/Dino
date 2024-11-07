import Link from "next/link";
import { BorderedContainer } from "./primitives/BorderedContainer";
import { Button } from "./primitives/Button";

export interface CalculoCardProps {
  title: string;
  description: string;
  path: string;
}

export function CalculoCard(props: CalculoCardProps) {
  return (
    <>
      <Link href={props.path} className="w-11/12 md:w-1/4 cursor-default">
        <BorderedContainer className="flex flex-col items-center gap-2 md:min-h-64">
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <p
            className="text-base text-justify"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
          <Button variant="primary" className="w-1/4 p-2 rounded-lg font-bold mt-auto">
            Usar
          </Button>
        </BorderedContainer>
      </Link>
    </>
  );
}
