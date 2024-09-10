import React from "react";
import "./AgeCardStyles.scss";
import { capitalizeFirstLetter } from "utils/reusableFunctions";
import { CalendarFilled } from "@ant-design/icons";
interface AgeCardProps {
  name: string;
  age: number;
}

const AgeCard: React.FC<AgeCardProps> = ({ name, age }) => {
  return (
    <div className="age-card">
        <div className="age-card__content">
        <h1 className="title-primary name-title">{capitalizeFirstLetter(name)}</h1>
      <h2>Estimated Age:</h2>
      <p className="title-tertiary"><span className='font-bold '>{capitalizeFirstLetter(name)}</span> is estimated to be <span className='font-bold '>{age}</span> years old.</p>
        </div>
      <CalendarFilled className="age-icon"/>
    </div>
  );
};

export default AgeCard;
