import { useState } from "react";
import "./challenge.css";
export const Challenge = () => {
  const [input, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  const count_style = {
    color: "rgb(22, 131, 203)",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };
  const handleStepInput = (e) => {
    setInputValue(Number(e.target.value));
  };
  const handleIncrement = () => {
    setCount(count + input);
  };
  const handleDecrement = () => {
    setCount(count - input);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <section className="challenge-container">
      <div className="contents">
        <header>
          <h1>useState Challenge</h1>
        </header>
        <div>
          <p>
            Count: <span style={count_style}>{count}</span>
          </p>
        </div>
        <div>
          <form>
            <label htmlFor="step">Step: </label>
            <input
              type="number"
              min={0}
              value={input}
              onChange={handleStepInput}
            />
          </form>
        </div>
        <div className="btn">
          <button disabled={count >= 100} onClick={handleIncrement}>
            Increment
          </button>
          <button disabled={count <= 0} onClick={handleDecrement}>
            Decrement
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </section>
  );
};
