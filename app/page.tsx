import { BorderedContainer } from "@/components/primitives/BorderedContainer";
import { Button } from "@/components/primitives/Button";
import { HorizontalSeparator } from "@/components/primitives/HorizontalSeparator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-4 min-h-[100vh] mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mt-4 text-center mx-3">
          Uma calculadora simples e{" "}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text font-extrabold">
            completa
          </span>
        </h1>
        <div className="flex flex-row w-11/12 md:w-1/4 justify-between items-end">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Dino</h1>
            <Link href={"/calculos"}>
              <Button variant="primary" className="p-2">
                Cálculos
              </Button>
            </Link>
          </div>
          <div className="rounded-full w-32 h-32 relative overflow-hidden">
            <Image src="/logo.png" alt="logo" layout="fill" objectFit="cover" />
          </div>
        </div>
        <section className="flex flex-col items-center gap-2">
          <HorizontalSeparator className="my-4 h-1 rounded-full w-11/12 md:w-1/3" />
          <h2 className="text-2xl font-bold">Funções do site</h2>
          <div className="flex w-full flex-col md:flex-row flex-wrap gap-3 mt-2 px-4 items-center justify-center">
            <BorderedContainer className="w-11/12 md:w-1/5 flex flex-col items-center gap-2 md:h-40">
              <h2 className="text-2xl font-bold">Cálculos completos</h2>
              <p className="text-base text-justify">
                A nossa calculadora é capaz de calcular função quadrática e afim
                (mais funções em breve), de forma completa.
              </p>
            </BorderedContainer>
            <BorderedContainer className="w-11/12 md:w-1/5 flex flex-col items-center gap-2 md:h-40">
              <h2 className="text-2xl font-bold">Resoluções</h2>
              <p className="text-base text-justify">
                A nossa calculadora é capaz de realizar as resoluções com o
                passo a passo do processo.
              </p>
            </BorderedContainer>
          </div>
        </section>
      </main>
    </>
  );
}
