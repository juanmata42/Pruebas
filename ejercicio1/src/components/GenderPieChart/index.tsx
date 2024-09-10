import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./GenderPieChartStyles.scss";
interface GenderChartProps {
  data: {
    gender: string;
    probability: number;
  };
}

const GenderChart: React.FC<GenderChartProps> = ({ data }) => {
  const pieData = [
    { name: "Male", value: data.probability * 100 },
    { name: "Female", value: (1 - data.probability) * 100 },
  ];

  return (
    <div className="gender-chart">
      <h2>Gender Probability</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          <Cell key="male" fill="#8884d8" />
          <Cell key="female" fill="#82ca9d" />
        </Pie>
      </PieChart>
    </div>
  );
};

export default GenderChart;
