import React from "react";
import { GridLoader } from "react-spinners";
import "./LoadingStyles.scss";
import { constants } from "utils/defaultConstants";

const Loading: React.FC<{ active: boolean }> = (props) => {
  const { active } = props;
  if (!active) return null;
  return (
    <div className="loader__container">
      <div className="overLays" />
      <GridLoader
        color={constants.MAIN_COLOR}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

Loading.displayName = "Loading";

export default Loading;
