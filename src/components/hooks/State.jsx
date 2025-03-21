import { useState } from "react";
import "../EV.css";
export const State = () => {
  //   console.log(useState());
  const [count, setCount] = useState(0);
  console.log("Parent Component rendered");
  const handleButtonClick = () => {
    setCount(() => {
      return count + 1;
    });
  };

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
};

function ChildComponent({ count }) {
  console.log("Child Component rendered");
  return (
    <div className="main-div">
      <h2>Child Component - {count}</h2>
    </div>
  );
}
