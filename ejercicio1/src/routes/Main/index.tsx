import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGenderData, getNationalizeData, getAgeData } from "utils/apiCalls"; // Adjust the path if necessary
import GenderChart from "components/GenderPieChart";
import NationalityChart from "components/CountryLineChart";
import AgeCard from "components/AgeCard";
import SearchBar from "components/SearchBar";
import "./mainStyles.scss";

export interface GenderResponse {
  count: number;
  name: string;
  gender: "male" | "female"; // Gender is either "male" or "female"
  probability: number; // Probability between 0 and 1
}
export interface Country {
  country_id: string;
  probability: number;
}

export interface NationalizeResponse {
  count: number;
  name: string;
  country: Country[];
}
export interface AgeResponse {
  count: number;
  name: string;
  age: number;
}


const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [genderData, setGenderData] = useState<GenderResponse | null>(null);
  const [nationalizeData, setNationalizeData] = useState<NationalizeResponse | null>(null);
  const [ageData, setAgeData] = useState<AgeResponse | null>(null);

  const handleSearch = async (name: string) => {
    // Trigger API calls for each endpoint
    const genderResponse = await getGenderData(name, dispatch);
    const nationalizeResponse = await getNationalizeData(name, dispatch);
    const ageResponse = await getAgeData(name, dispatch);

    // Set data from API responses into state
    setGenderData(genderResponse);
    setNationalizeData(nationalizeResponse);
    setAgeData(ageResponse);
  };

  return (
    <section className="main">
      <SearchBar onSearch={handleSearch} />
      {ageData && <AgeCard name={ageData.name} age={ageData.age} />}
      {genderData && <GenderChart data={genderData} />}
      {nationalizeData && <NationalityChart data={nationalizeData} />}
    </section>
  );
};

Main.displayName = "Main";

export default Main;
