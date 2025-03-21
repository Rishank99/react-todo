import { useState } from "react";

export const Controlled = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <section>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="inputValue"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
