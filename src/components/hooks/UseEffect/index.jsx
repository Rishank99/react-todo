import { useEffect, useState } from "react";

export const ReactUseEffect = () => {
  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Date : {date}</h1>
    </div>
  );
};
