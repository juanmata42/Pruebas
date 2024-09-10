import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './TestingCasesComparisonChart.scss';

interface TestingCasesData {
  date: string;
  testing: {
    total: {
      value: number;
    };
  };
  cases: {
    total: {
      value: number;
    };
  };
}

interface TestingCasesComparisonChartProps {
  data: TestingCasesData[];
}

const TestingCasesComparisonChart: React.FC<TestingCasesComparisonChartProps> = ({ data }) => {
  return (
    <div className="testing-cases-comparison-chart">
      <h2 className='title-secondary'>Testing vs Cases Comparison</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="testing.total.value" fill="#413ea0" name="Total Tests" />
          <Line type="monotone" dataKey="cases.total.value" stroke="#ff7300" name="Total Cases" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestingCasesComparisonChart;
