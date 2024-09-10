import React, {useEffect, useState} from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import "./CountryLineChartStyles.scss";
import { constants } from "utils/defaultConstants";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
interface NationalityChartProps {
  data: {
    country: Array<{ country_id: string; probability: number }>;
  };
}

const NationalityChart: React.FC<NationalityChartProps> = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(400);
  // turn the constants.palette object into an array of colors
  const colors = Object.values(constants.palette);
  // Detect screen width
  const width = window.innerWidth;
  useEffect(() => {
    if (width < 768) {
      setChartWidth(300);
    }
  } , [width]);
  return (
    <div className="nationality-chart">
      <h2 className="title-primary">Nationality Probabilities</h2>
      <BarChart width={chartWidth} height={300} data={data.country}>
        <XAxis dataKey="country_id" tickFormatter={(country_id) => getUnicodeFlagIcon(country_id)}
          interval={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="probability">
          {data.country.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default NationalityChart;
