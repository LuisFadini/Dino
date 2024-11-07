"use client";

import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";
import { Label } from "@/components/primitives/Label";
import { MathJS } from "@/components/primitives/MathJS";
import { OutputData, Resolution } from "@/components/Resolution";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export function CalculadoraSegundoGrau() {
  const numRegex = useMemo(() => /^-?\d*\.?\d*$/, []);
  const searchParams = useSearchParams();

  const [outputData, setOutputData] = useState<OutputData[]>([]);
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);

  useEffect(() => {
    const updateValuesFromParams = () => {
      const aParam = searchParams.get("a");
      const bParam = searchParams.get("b");
      const cParam = searchParams.get("c");

      let updatedA = a;
      let updatedB = b;
      let updatedC = c;

      if (aParam && numRegex.test(aParam)) {
        updatedA = Number(aParam);
        if (updatedA === 0) updatedA = 1;
      }

      if (bParam && numRegex.test(bParam)) {
        updatedB = Number(bParam);
      }

      if (cParam && numRegex.test(cParam)) {
        updatedC = Number(cParam);
      }

      if (updatedA !== a || updatedB !== b || updatedC !== c) {
        setA(updatedA);
        setB(updatedB);
        setC(updatedC);
        calcularQuadratico(updatedA, updatedB, updatedC);
      }
    };

    updateValuesFromParams()
  }, [numRegex, searchParams, a, b, c]);

  const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    if (numRegex.test(e.target.value)) {
      const value = Number(e.target.value);
      if (value !== 0) setA(value);
      else setA(1);
    }
  };

  const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || numRegex.test(e.target.value)) {
      setB(Number(e.target.value));
    }
  };

  const onChangeC = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || numRegex.test(e.target.value)) {
      setC(Number(e.target.value));
    }
  };

  const calcularQuadratico = (a: number, b: number, c: number) => {
    const delta = b ** 2 - 4 * a * c;

    const mathA = a < 0 ? `(${a})` : a;
    const mathB = b < 0 ? `(${b})` : b;
    const mathC = c < 0 ? `(${c})` : c;

    const steps = [
      {
        title: "Delta",
        data: [
          {
            expression: `\\Delta = b^2 - 4 \\cdot a \\cdot c`,
            id: "deltaStep1",
          },
          {
            expression: `\\Delta = ${mathB}^2 - 4 \\cdot ${mathA} \\cdot ${mathC}`,
            id: "deltaStep2",
          },
          { expression: `\\Delta = ${delta}`, id: "deltaStepR" },
        ],
      },
      {
        title: "Raízes",
        data: [],
      },
      {
        title: "Intercepto",
        data: [
          { expression: `y = ax^2 + bx + c`, id: "interceptoStep1" },
          {
            expression: `y = ${a}x^2 
            ${b === 0 ? "" : b < 0 ? `${b} x` : `+ ${b}x`}
            ${c === 0 ? "" : c < 0 ? `${c}` : `+ ${c}`}`,
            id: "interceptoStep2",
          },
          {
            expression: `y = ${a} \\cdot 0^2 
            ${b === 0 ? "" : b < 0 ? `${b} \\cdot 0` : `+ ${b} \\cdot 0`}
            ${c === 0 ? "" : c < 0 ? `${c}` : `+ ${c}`}`,
            id: "interceptoStep3",
          },
          {
            expression: `y = ${c}`,
            id: "interceptoStep4",
          },
        ],
      },
      {
        title: "Vértice",
        data: [
          { expression: `x_v = \\frac {-b} {2 \\cdot a}`, id: "verticeStep1" },
          {
            expression: `x_v = \\frac {-${mathB}} {2 \\cdot ${mathA}}`,
            id: "verticeStep2",
          },
          { expression: `x_v = \\frac {${-b}} {${2 * a}}`, id: "verticeStep3" },
          { expression: `x_v = {${-b / (2 * a)}}`, id: "verticeStep4" },

          {
            expression: `y_v = \\frac {-\\Delta} {4 \\cdot a}`,
            id: "verticeStep5",
          },
          {
            expression: `y_v = \\frac {-${
              delta < 0 ? `(${delta})` : delta
            }} {4 \\cdot ${mathA}}`,
            id: "verticeStep6",
          },
          {
            expression: `y_v = \\frac {${-delta}} {${4 * a}}`,
            id: "verticeStep7",
          },
          { expression: `y_v = {${-delta / (4 * a)}}`, id: "verticeStep8" },
        ],
      },
    ];

    if (delta < 0) {
      steps[1].data.push({
        expression: `Não existem raízes reais.`,
        id: "noMath",
      });
    } else {
      steps[1].data.push(
        {
          expression: "x = \\frac {-b \\pm \\sqrt {\\Delta}} {2 \\cdot a}",
          id: "raizStep1",
        },
        {
          expression: `x = \\frac {-${mathB} \\pm \\sqrt {${delta}}} {2 \\cdot ${mathA}}`,
          id: "raizStep2",
        }
      );
      if (delta === 0)
        steps[1].data.push({
          expression: `x = ${(-b + Math.sqrt(delta)) / (2 * a)}`,
          id: "raizStep3",
        });
      else
        steps[1].data.push(
          {
            expression: `x^{'} = \\frac {${-b} + \\sqrt {${delta}}} {${2 * a}}`,
            id: "raizStep3",
          },
          {
            expression: `x^{''} = \\frac {${-b} - \\sqrt {${delta}}} {${
              2 * a
            }}`,
            id: "raizStep4",
          },
          {
            expression: `x^{'} = ${(-b + Math.sqrt(delta)) / (2 * a)}`,
            id: "raizStep5",
          },
          {
            expression: `x^{''} = ${(-b - Math.sqrt(delta)) / (2 * a)}`,
            id: "raizStep6",
          }
        );
    }

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
        <div className="flex flex-row gap-2 items-center">
          <Label htmlFor="inC" className="w-24">
            Valor de <MathJS expression="c" id="c" />:
          </Label>
          <Input
            type="number"
            id="inC"
            className="w-20"
            onChange={onChangeC}
            value={c}
            autoComplete="off"
          />
        </div>

        <Button
          variant="primary"
          onClick={() => calcularQuadratico(a, b, c)}
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
                `${window.location.href}?a=${a}&b=${b}&c=${c}`
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
