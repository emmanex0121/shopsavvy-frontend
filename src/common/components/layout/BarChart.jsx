import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", uv: 40, pv: 24, amt: 24 },
  { name: "Week 2", uv: 30, pv: 13.98, amt: 22.1 },
  { name: "Week 3", uv: 20, pv: 98, amt: 22.9 },
  { name: "Week 4", uv: 27.8, pv: 39.08, amt: 20 },
];

const SimpleBarChart = () => {
  return (
    <div style={{ maxWidth: "40rem", width: "100%", padding: 0, margin: 0 }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0, // Remove right margin
            left: 0, // Remove left margin
            bottom: 5,
          }}
          style={{ padding: 0, margin: 0 }} // Ensure no extra padding or margin
        >
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={6} />
          <Tooltip />
          <Bar dataKey="pv" fill="#D3C4FC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
