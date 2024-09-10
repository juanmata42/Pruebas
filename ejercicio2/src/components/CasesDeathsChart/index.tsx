import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './CasesDeathsChart.scss';

interface CovidData {
  date: string;
  cases: {
    total: {
      value: number;
    };
  };
  outcomes: {
    death: {
      total: {
        value: number;
      };
    };
  };
}

interface CasesDeathsChartProps {
  data: CovidData[];
}

const CasesDeathsChart: React.FC<CasesDeathsChartProps> = ({ data }) => {
  return (
    <div className="cases-deaths-chart-container">
      <h2 className='title-secondary covid-table__title'>Daily COVID-19 Cases and Deaths in the U.S.</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases.total.value" stroke="#8884d8" name="Total Cases" />
          <Line type="monotone" dataKey="outcomes.death.total.value" stroke="#82ca9d" name="Total Deaths" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CasesDeathsChart;
