import React from 'react';
import './DeathsSummaryCard.scss';

interface DeathsSummaryCardProps {
  data: {
    totalDeaths: number;
    newDeaths: number;
    sevenDayChangePercent: number;
  }
}

const DeathsSummaryCard: React.FC<DeathsSummaryCardProps> = ({ data }) => {
  const { totalDeaths, newDeaths, sevenDayChangePercent } = data;
  return (
    <div className="deaths-summary-card">
      <h3>Total Deaths</h3>
      <p className="total">{totalDeaths.toLocaleString()}</p>
      <h3>New Deaths (from prior day)</h3>
      <p className="new-deaths">{newDeaths.toLocaleString()}</p>
      <h3>7-Day Change (%)</h3>
      <p className={`change-percent ${sevenDayChangePercent >= 0 ? 'positive' : 'negative'}`}>
        {sevenDayChangePercent}%
      </p>
    </div>
  );
};

export default DeathsSummaryCard;
