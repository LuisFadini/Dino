import { MathJS } from "@/components/primitives/MathJS";
import { CalculadoraAfim } from "./components/CalculadoraAfim";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Função Afim - Dino",
};

export default function Afim() {
  const caracteristics = [
    "O gráfico da função afim é uma reta.",
    "O número \"a\" é chamado de coeficiente de \"x\" e representa a taxa de crescimento ou taxa de variação da função.",
    "O número \"b\" é chamado de termo constante.",
    "A direção da reta do gráfico da função pode ser determinada a partir do coeficiente angular.",
    "Quando o coeficiente é maior do que zero, temos uma função afim crescente.",
    "Quando o coeficiente é menor do que zero, temos uma função afim decrescente.",
  ];

  return (
    <main className="flex flex-col items-center min-h-[100vh] mb-6">
      <h1 className="font-bold text-center text-3xl mt-8">Função afim</h1>
      <p className="w-11/12 md:w-1/2 mt-2 text-justify">
        A função afim, também conhecida como função do 1º grau, é uma função
        matemática que estabelece uma relação linear entre as variáveis x e
        f(x). Ela é representada pela expressão f(x) = ax + b, onde:
        &quot;x&quot; é a variável independente, &quot;a&quot; e &quot;b&quot;
        são números reais, a é diferente de 0. <br /> A função afim tem as
        seguintes características:
      </p>
      <ul className="w-11/12 md:w-1/2 mt-2 flex flex-col text-left list-inside list-disc pl-2">
        {caracteristics.map((text) => {
          return <li key={text}>{text}</li>;
        })}
      </ul>
      <MathJS expression="ax+b" id="expression" />
      <Suspense fallback={<></>}>
        <CalculadoraAfim />
      </Suspense>
    </main>
  );
}
