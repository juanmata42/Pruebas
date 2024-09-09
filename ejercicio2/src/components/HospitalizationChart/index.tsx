import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './HospitalizationBarChart.scss';

interface HospitalizationData {
  date: string;
  outcomes: {
    hospitalized: {
      currently: {
        value: number;
      };
      in_icu: {
        currently: {
          value: number;
        };
      };
      on_ventilator: {
        currently: {
          value: number;
        };
      };
    };
  };
}

interface HospitalizationBarChartProps {
  data: HospitalizationData[];
}

const HospitalizationBarChart: React.FC<HospitalizationBarChartProps> = ({ data }) => {
  return (
    <div className="hospitalization-bar-chart-container">
      <h2 className='title-secondary covid-table__title'>Current Hospitalizations, ICU Admissions, and Ventilator Use</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="outcomes.hospitalized.currently.value" fill="#8884d8" name="Currently Hospitalized" />
          <Bar dataKey="outcomes.hospitalized.in_icu.currently.value" fill="#82ca9d" name="Currently in ICU" />
          <Bar dataKey="outcomes.hospitalized.on_ventilator.currently.value" fill="#ffc658" name="Currently on Ventilator" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalizationBarChart;
