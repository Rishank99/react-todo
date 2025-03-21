import { useState, useEffect } from "react";
export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      // 15
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // 17 useEffect clean up function
    return () => clearInterval(interval);
  }, []);
  return (
    <h2 className="date-time">
      {/* {formattedDate} - {formattedTime} */}
      {/* 16 */}
      {dateTime}
    </h2>
  );
};
