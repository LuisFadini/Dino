"use client";

import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";
import { Label } from "@/components/primitives/Label";
import { MathJS } from "@/components/primitives/MathJS";
import { OutputData, Resolution } from "@/components/Resolution";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export function CalculadoraAfim() {
  const numRegex = useMemo(() => /^-?\d*\.?\d*$/, []);
  const searchParams = useSearchParams();

  const [outputData, setOutputData] = useState<OutputData[]>([]);
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);

  useEffect(() => {
    const updateValuesFromParams = () => {
      const aParam = searchParams.get("a");
      const bParam = searchParams.get("b");

      let updatedA = a;
      let updatedB = b;

      if (aParam && numRegex.test(aParam)) {
        updatedA = Number(aParam);
        if (updatedA === 0) updatedA = 1;
      }

      if (bParam && numRegex.test(bParam)) {
        updatedB = Number(bParam);
      }

      if (updatedA !== a || updatedB !== b) {
        setA(updatedA);
        setB(updatedB);
        calcularAfim(updatedA, updatedB);
      }
    };

    updateValuesFromParams();
  }, [numRegex, searchParams, a, b]);

  const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    if (numRegex.test(e.target.value)) {
      const value = Number(e.target.value);
      if (value !== 0) setA(value);
      else setA(1);
    }
  };

  const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || numRegex.test(e.target.value))
      setB(Number(e.target.value));
  };

  const calcularAfim = (a: number, b: number) => {
    const mathB = b < 0 ? `(${b})` : b;

    const res = -b / a;

    const steps: OutputData[] = [
      {
        title: "Raiz",
        data: [
          { expression: "x=-\\frac {b} {a}", id: "raizStep1" },
          { expression: `x=-\\frac {${b}} {${a}}`, id: "raizStep2" },
          { expression: `x=${res}`, id: "raizStep3" },
        ],
      },
      {
        title: "Intercepto",
        data: [
          { expression: "y=ax+b", id: "interceptoStep1" },
          { expression: `y=${a} \\cdot 0 + ${mathB}`, id: "interceptoStep2" },
          { expression: `y=${b}`, id: "interceptoStep3" },
        ],
      },
    ];

    setOutputData(steps);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Label htmlFor="inA" className="w-24">
            Valor de <MathJS expression="a" id="a" />:
          </Label>
          <Input
            type="number"
            id="inA"
            className="w-20"
            onChange={onChangeA}
            value={a}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Label htmlFor="inB" className="w-24">
            Valor de <MathJS expression="b" id="b" />:
          </Label>
          <Input
            type="number"
            id="inB"
            className="w-20"
            onChange={onChangeB}
            value={b}
            autoComplete="off"
          />
        </div>

        <Button
          variant="primary"
          onClick={() => calcularAfim(a, b)}
          className="p-2"
        >
          Calcular
        </Button>
      </div>
      {outputData.length > 0 && (
        <>
          <Resolution data={outputData} />
          <Button
            className="mt-4"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();

              window.navigator.clipboard.writeText(
                `${window.location.href}?a=${a}&b=${b}`
              );
            }}
          >
            Copiar link
          </Button>
        </>
      )}
    </>
  );
}
