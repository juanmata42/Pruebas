import React, { useState, useEffect } from "react";
import "./errorStyles.scss";

interface ErrorProps {
  title: string;
  content: string;
}

const Error: React.FC<ErrorProps> = ({ title, content }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="error">
      <h1 className="title-primary">{title}</h1>
      <p className="text">{content}</p>
    </section>
  );
};

Error.displayName = "Error";

export default Error;
