export type OutputData = {
  title: string;
  data: { expression: string; id: string }[];
};

export interface ResolutionProps {
  data: number;
  dataFormat: string
}

export function ResolutionData(props: ResolutionProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4">O resultado é {props.data}{props.dataFormat}</h2>
    </>
  );
}
