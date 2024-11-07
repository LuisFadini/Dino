"use client";

import "katex/dist/katex.min.css";
import katex from "katex";
import { useEffect } from "react";

export interface MathProps {
  expression: string;
  id: string;
}

export function MathJS(props: MathProps) {
  useEffect(() => {
    katex.render(props.expression, document.getElementById(props.id)!, {});
  }, [props]);

  return <div id={props.id}></div>;
}
