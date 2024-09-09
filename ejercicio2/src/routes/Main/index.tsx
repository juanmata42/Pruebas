import React, { useState, useEffect } from "react";

import "./mainStyles.scss";

const Main: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="main">
      <h1>Main</h1>
    </section>
  );
};

Main.displayName = "Main";

export default Main;
