"use client";

import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";
import { Label } from "@/components/primitives/Label";
import { ResolutionData } from "@/components/ResolutionData";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export function CalculadoraGBparaMB() {
  const numRegex = useMemo(() => /^(?:\d+(\.\d+)?|\.\d+)$/, []);

  const searchParams = useSearchParams();

  const [outputData, setOutputData] = useState<number>(0);
  const [gb, setGB] = useState<number>(0);

  useEffect(() => {
    const updateValuesFromParams = () => {
      const gbParam = searchParams.get("gb");

      let updatedGB = gb;

      if (gbParam && numRegex.test(gbParam)) {
        updatedGB = Number(gbParam);
      }

      if (updatedGB !== gb) {
        setGB(updatedGB);
        calcularMB(updatedGB);
      }
    };

    updateValuesFromParams();
  }, [numRegex, searchParams, gb]);

  const onChangeGB = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || numRegex.test(value)) {
      setGB(value === "" ? 0 : Number(value));
    }
  };

  const calcularMB = (gb: number) => {
    setOutputData(gb * 1024);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Label htmlFor="inA" className="w-32">
            Valor em GB:
          </Label>
          <Input
            type="number"
            id="inA"
            className="w-20"
            onChange={onChangeGB}
            value={gb}
            autoComplete="off"
          />
        </div>

        <Button
          variant="primary"
          onClick={() => calcularMB(gb)}
          className="p-2"
        >
          Calcular
        </Button>
      </div>
      {outputData > 0 && (
        <>
          <ResolutionData data={outputData} dataFormat={"MB"} />
          <Button
            className="mt-4"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();

              window.navigator.clipboard.writeText(
                `${window.location.href}?gb=${gb}`
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
