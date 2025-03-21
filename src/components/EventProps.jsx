import "./EV.css";
export const EventProps = () => {
  const handleWelcomeUser = (name) => {
    alert(`Hello, ${name}`);
  };

  const handleHover = () => {
    alert("Thanks for hoveing");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Rishank")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log("Hello User, Welcome");
    onClick();
  };

  return (
    <>
      <button onClick={onClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
