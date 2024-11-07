import { MathJS } from "@/components/primitives/MathJS";
import { Suspense } from "react";
import { CalculadoraGBparaMB } from "./components/CalculadoraGBMB";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GB para MB - Dino",
};

export default function GBParaMB() {
  return (
    <main className="flex flex-col items-center min-h-[100vh] mb-6">
      <h1 className="font-bold text-center text-3xl mt-8">GB para MB</h1>
      <p className="w-11/12 md:w-1/2 mt-2 text-justify">
        Megabyte (MB): 1 MB é igual a 1.024 kilobytes (KB). Gigabyte (GB): 1 GB
        é igual a 1.024 megabytes. Para converter megabytes em gigabytes, você
        divide a quantidade de megabytes por 1.024. Para converter gigabytes em
        megabytes, você multiplica a quantidade de gigabytes por 1.024. <br />
        <b>Exemplo:</b> 2 GB x 1.024 = 2.048 MB. Assim, a relação entre as
        unidades é baseada no fator 1.024, que segue o sistema binário utilizado
        em computação.
      </p>
      <MathJS expression="gb \cdot 1024" id="expression" />
      <Suspense fallback={<></>}>
        <CalculadoraGBparaMB />
      </Suspense>
    </main>
  );
}
