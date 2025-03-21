// Description: In this challenge, you'll create a React component that dynamically manages state using 'useState' hooks. Your component will include:
// 1. A counter that increments when a button is clicked.
// 2. An input field where users can type thier name.
// 3. The document tiltle will update to show the current count.

import { useEffect, useState } from "react";

export const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Name is:", input);
  }, [input]);
  return (
    <div>
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span>{input}</span>
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
