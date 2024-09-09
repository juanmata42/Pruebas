import React, { useState, useEffect } from "react";
import { useAppSelector } from "store";
import { type State } from "models/state";
import { getCovidData } from "src/utils/apiCalls";
import "./mainStyles.scss";
import { useDispatch } from "react-redux";
import CovidTable from 'components/Table';
import CasesDeathsChart from "components/CasesDeathsChart";
import HospitalizationBarChart from "components/HospitalizationChart";
import DeathsSummaryCard from "components/DeathsSummaryCard";
import TestingCasesComparisonChart from "components/TestingCasesComparisonChart";

interface CovidDeathData {
  date: string;
  outcomes: {
    death: {
      total: {
        value: number;
        calculated: {
          change_from_prior_day: number;
          seven_day_average: number;
        };
      };
    };
  };
}

interface DeathsSummaryData {
  totalDeaths: number;
  newDeaths: number;
  sevenDayChangePercent: number;
}

const Main: React.FC = () => {
const loading = useAppSelector((state: State) => state.loading.active);
const dispatch = useDispatch();
const [covidData, setCovidData] = useState([]);
const calculateDeathsSummary = (data: CovidDeathData[]): DeathsSummaryData => {
// Get the latest day’s data
const latestDayData = data[0];

// Get the total deaths and new deaths
const totalDeaths = latestDayData.outcomes.death.total.value;
const newDeaths = latestDayData.outcomes.death.total.calculated?.change_from_prior_day;

// Calculate the 7-day change percentage
const sevenDayAverage = latestDayData.outcomes.death.total.calculated?.seven_day_average;
const previousSevenDayAverage = data[1].outcomes.death.total.calculated?.seven_day_average;
const sevenDayChangePercent = ((sevenDayAverage - previousSevenDayAverage) / previousSevenDayAverage) * 100;

return {
  totalDeaths,
  newDeaths,
  sevenDayChangePercent: parseFloat(sevenDayChangePercent.toFixed(2)), // Format to 2 decimal places
  };
};

  useEffect(() => {
    getCovidData(dispatch).then((data) => {
      setCovidData(data.data);});
  }, []);
  return (
    <section className="main">
      {!loading && covidData.length && <>
      <CovidTable data={covidData} />
      <CasesDeathsChart data={covidData} />
      <HospitalizationBarChart data={covidData} />
      <DeathsSummaryCard data={calculateDeathsSummary(covidData)} />
      <TestingCasesComparisonChart data={covidData} />
      </>}
    </section>
  );
};

Main.displayName = "Main";

export default Main;
