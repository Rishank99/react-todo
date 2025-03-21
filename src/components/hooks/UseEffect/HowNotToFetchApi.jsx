import { useState, useEffect } from "react";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        data:
        {apiData.map((curData) => {
          return <li key={curData.id}>{curData.title}</li>;
        })}
      </ul>
    </div>
  );
};
