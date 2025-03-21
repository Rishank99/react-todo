import "./EV.css";
export const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };
  return (
    <>
      {/* Function Components with Named Functions */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>Click Me 1</button>
      <br />
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <button onClick={() => alert("Hey, I am Inline event function")}>
        Inline Arrow Function
      </button>
      <br />
      <button onClick={() => handleWelcomeUser("Rishank")}>Click Me</button>
    </>
  );
};
