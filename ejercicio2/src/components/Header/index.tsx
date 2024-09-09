import React from "react";
import "./HeaderStyles.scss";
import MainIcon from "assets/COVIDChronicleIcon.svg";

const Header: React.FC = () => {
  return <header className="main-header">
    <img className="main-header__icon" src={MainIcon} alt="NameSage Icon" />
    <h1 className="main-header__title title-primary">COVIDChronicle</h1>
  </header>;
};

Header.displayName = "Header";

export default Header;
