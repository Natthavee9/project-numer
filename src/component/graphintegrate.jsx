import React from "react";
import Plot from "react-plotly.js";
import { evaluate } from "mathjs";

export default function TrapezoidalGraph({ a, b, equation, n }) {
  const A = parseFloat(a);
  const B = parseFloat(b);
  const N = parseInt(n);

  if (isNaN(A) || isNaN(B) || isNaN(N) || !equation) return null;

  const f = (x) => {
    try {
      return evaluate(equation, { x });
    } catch {
      return NaN;
    }
  };

  const xValues = [];
  const yValues = [];
  const step = (B - A) / N;

  for (let i = A; i <= B + step / 2; i += step) {
    xValues.push(i);
    yValues.push(f(i));
  }

  // สีแต่ละช่วง (จะวนซ้ำ)
  const colors = [
    "rgba(144,238,144,0.5)", // เขียวอ่อน
  ];

  // ข้อมูลพื้นที่ trapezoid แต่ละช่วง
  const areaData = [];
  for (let i = 0; i < xValues.length - 1; i++) {
    areaData.push({
      x: [xValues[i], xValues[i + 1], xValues[i + 1], xValues[i], xValues[i]],
      y: [0, 0, Math.abs(yValues[i + 1]), Math.abs(yValues[i]), 0],
      type: "scatter",
      mode: "none",
      fill: "toself",
      fillcolor: colors[i % colors.length],
      name: "Trapezoidal "+ (i+1) ,
      showlegend: false,
    });
  }

  // เส้นตั้งแต่ละ xi
  const verticalLines = xValues.map((x) => ({
    type: "line",
    x0: x,
    x1: x,
    y0: 0,
    y1: Math.abs(f(x)),
    line: { color: "red", width: 2 },
  }));

  //ข้อมูลกราฟทั้งหมด
  const plotData = [
    // เส้นกราฟ f(x)
    {
      x: xValues,
      y: yValues,
      type: "scatter",
      mode: "lines+markers",
      name: "f(x)",
      line: { color: "black", width: 2 },
      marker: { color: "red", size: 6 },
    },
    // พื้นที่ trapezoid
    ...areaData,
  ];

  return (
    <div style={{width: "100%",height: 500, marginTop: "2rem",display: "flex",
                 justifyContent: "center",alignItems: "center",}}>
      <Plot
        data={plotData}
        layout={{
          title: "Composite Trapezoidal Rule",
          xaxis: { title: "x", zeroline: true },
          yaxis: { title: "f(x)" },
          showlegend: false,
          shapes: verticalLines, // ✅ เส้นตั้งแต่ละช่วง
        }}
      />
    </div>
  );
}