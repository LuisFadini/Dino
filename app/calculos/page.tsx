import { CalculoCard, CalculoCardProps } from "@/components/CalculoCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cálculos - Dino",
};

export default function Calculos() {
  const calculos: CalculoCardProps[] = [
    {
      title: "Função Afim",
      description:
        'Uma função afim é fundamental na matemática, especialmente na álgebra. Ela é dada pela expressão f(x)=ax+b, onde "x" é a variável independente e "a" e "b" são números reais, com "a" diferente de 0.',
      path: "/calculos/afim",
    },
    {
      title: "Função Segundo Grau",
      description:
        'A função quadrática, ou função polinomial de 2º grau, é representada por f(x)=ax²+bx+c, onde "x" é a variável independente. Os coeficientes "a", "b" e "c" são números reais, com "a" diferente de 0.',
      path: "/calculos/2grau",
    },
    {
      title: "GB para MB",
      description:
        "Um megabyte (MB) e um gigabyte (GB) são unidades de medida de armazenamento de dados digitais.",
      path: "/calculos/gb-para-mb",
    },
  ];

  return (
    <>
      <main className="w-full flex flex-col items-center min-h-[100vh] mb-6">
        <h1 className="text-center text-3xl font-bold mt-4">Cálculos</h1>
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-3 mt-2 px-4 items-center justify-center">
          {calculos.map((calculo) => {
            return <CalculoCard key={calculo.title} {...calculo} />;
          })}
        </div>
      </main>
    </>
  );
}
