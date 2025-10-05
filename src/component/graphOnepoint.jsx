import Plot from "react-plotly.js";

export default function GraphOnePoint({ data }) {
    console.log("data in GraphOnePoint:", data);
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
            marker: { color: '#A4F600', size: 6 },
            line: { color: 'black', width: 3  },
            name: "Error"
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