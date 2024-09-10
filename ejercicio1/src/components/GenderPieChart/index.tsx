import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./GenderPieChartStyles.scss";
import { constants } from "utils/defaultConstants";
interface GenderChartProps {
  data: {
    gender: string;
    probability: number;
  };
}

const GenderChart: React.FC<GenderChartProps> = ({ data }) => {
  const pieData = [
    { name: `${Math.round(data.probability * 100)}% male`, value: data.probability * 100 },
    { name: `${Math.round((1 - data.probability) * 100)}% female`, value: (1 - data.probability) * 100 },
  ];

  return (
    <div className="gender-chart">
      <h2 className="title-primary">Gender Probability</h2>
      <PieChart width={300} height={400}>
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          iconType="circle"
        />
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
        >
          <Cell key="male" fill={constants.palette.pastelOrange} />
          <Cell key="female" fill={constants.palette.pastelPurple} />
        </Pie>
      </PieChart>
    </div>
  );
};

export default GenderChart;
