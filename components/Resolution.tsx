import { BorderedContainer } from "./primitives/BorderedContainer";
import { MathJS } from "./primitives/MathJS";

export type OutputData = {
  title: string;
  data: { expression: string; id: string }[];
};

export interface ResolutionProps {
  data: OutputData[];
}

export function Resolution(props: ResolutionProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4">Resolução</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mt-2 w-full items-center md:items-stretch md:justify-center">
        {props.data.map((data) => {
          return (
            <BorderedContainer
              key={`${data.title}-${Math.random()}`}
              className="flex flex-col items-center text-center w-11/12 md:w-2/12"
            >
              <h2 className="text-2xl font-bold">{data.title}</h2>
              <ul>
                {data.data.map(({ expression, id }) => {
                  return (
                    <li key={id} className="text-left">
                      {id === "noMath" ? (
                        <p>{expression}</p>
                      ) : (
                        <MathJS expression={expression} id={id} />
                      )}
                    </li>
                  );
                })}
              </ul>
            </BorderedContainer>
          );
        })}
      </div>
    </>
  );
}
