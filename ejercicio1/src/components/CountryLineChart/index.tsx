import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./CountryLineChartStyles.scss";
interface NationalityChartProps {
  data: {
    country: Array<{ country_id: string; probability: number }>;
  };
}

const NationalityChart: React.FC<NationalityChartProps> = ({ data }) => {
  return (
    <div className="nationality-chart">
      <h2>Nationality Probabilities</h2>
      <BarChart width={600} height={300} data={data.country}>
        <XAxis dataKey="country_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="probability" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default NationalityChart;
