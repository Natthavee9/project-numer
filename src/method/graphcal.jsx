import { evaluate } from "mathjs";

export const genGraph = (equation, xl, xr) => {
  const data = [];
  const start = parseFloat(xl);
  const end = parseFloat(xr);

  if (isNaN(start) || isNaN(end) || start >= end) {
    return data;
  }

  try {
    for (let x = start; x <= end; x += 0.01) {
      let y = evaluate(equation, { x });
      if (typeof y === "number" && isFinite(y)) {
        data.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(6)) });
      }
    }
  } catch (err) {
    console.error("Error generating graph data:", err);
  }
  return data;
};
