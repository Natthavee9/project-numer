import Plot from "react-plotly.js";

export default function Graph({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ width: "100%", height: 400, marginTop: "2rem" }}>
      <Plot
        data={[
          {
            x: data.map((d) => d.iteration),   
            y: data.map((d) => d.e),     
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            line: { color: "blue" },
            name: "f(x)"
          },
        ]}
        layout={{
          title: "Graph",
          xaxis: { title: "iteration" },
          yaxis: { title: "error" },
        }}
         config={{
        scrollZoom: true,
        displaylogo: false,
        responsive: true,
      }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}