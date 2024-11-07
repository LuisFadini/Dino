import { MathJS } from "@/components/primitives/MathJS";
import { CalculadoraSegundoGrau } from "./components/CalculadoraSegundoGrau";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Função Quadrática - Dino",
};

export default function SegundoGrau() {
  return (
    <main className="flex flex-col items-center min-h-[100vh] mb-6">
      <h1 className="font-bold text-center text-3xl mt-8">
        Função de segundo grau
      </h1>
      <p className="w-11/12 md:w-1/2 mt-2 text-justify">
        Uma função quadrática é uma função polinomial de grau 2, cuja forma
        geral é dada por f(x) = ax² ± bx ± c, onde a, b e c são coeficientes e a
        ≠ 0. O termo ax² é o que define o comportamento quadrático da função. O
        gráfico de uma função quadrática é uma parábola, que pode ser voltada
        para cima (quando &quot;a&quot; maior 0 ) ou para baixo (quando
        &quot;a&quot; menor 0 ). Essa parábola tem um ponto chamado vértice, que
        representa o valor máximo ou mínimo da função, dependendo da
        concavidade. As raízes da função, ou seja, os valores de &quot;x&quot;
        que tornam f(x) = 0, podem ser encontradas usando a fórmula de Bhaskara
        e dependem do valor do discriminante ∆ = b² - 4ac. Dependendo de ∆, a
        função pode ter duas, uma ou nenhuma raiz real.
      </p>
      <MathJS expression="ax^2+bx+c" id="expression" />
      <Suspense fallback={<></>}>
        <CalculadoraSegundoGrau />
      </Suspense>
    </main>
  );
}
