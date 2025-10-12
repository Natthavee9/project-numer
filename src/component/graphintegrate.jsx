import React from "react";
import Plot from "react-plotly.js";
import { evaluate } from "mathjs";

export default function SingleTrapezoidalGraph({ a, b, equation }) {
  // ฟังก์ชัน f(x)
  const f = (x) => evaluate(equation, { x });

  
  const xValues = [];
  const yValues = [];

  // จำนวนจุดที่ใช้วาด 
  const numPoints = 100;
  const step = (b - a) / numPoints;

  for (let i = a; i <= b; i += step) {
    xValues.push(i);
    yValues.push(f(i));
  }

  // คำนวณค่า f(a) และ f(b)
  const fa = f(a);
  const fb = f(b);

  // สร้างจุดสำหรับวาดพื้นที่ใต้กราฟ
  const trapX = [a, b, b, a];
  const trapY = [0, 0, fb, fa];

  return (
    <div style={{ width: "100%", height: 400, marginTop: "2rem",display: "flex",justifyContent:"center" ,alignItems: "center"}}>
      <Plot
        data={[
          // เส้นกราฟ f(x)
          {
            x: xValues,
            y: yValues,
            type: "scatter",
            mode: "lines",
            name: "f(x)",
            line: { color: "black" },
          },
          // พื้นที่ใต้กราฟ (Trapezoid)
          {
            x: trapX,
            y: trapY,
            type: "scatter",
            mode: "none",
            fill: "toself",
            fillcolor: "rgba(164, 246, 0, 0.4)",
            name: "Trapezoidal Area",
          },
          // เส้นเชื่อมระหว่าง f(a) และ f(b)
          {
            x: [a, b],
            y: [fa, fb],
            type: "scatter",
            mode: "lines+markers",
            line: { color: "red", dash: "dot" },
            name: "Trapezoid Edge",
          },
        ]}
        layout={{
          title: "Graph",
          xaxis: { title: "ค่า x" },
          yaxis: { title: "ค่า f(x)" },
          showlegend: true,
        }}
      />
    </div>
  );
}
