export const ProfileCard = ({ name, age, greeting, children }) => {
  //   const { name, age, greeting, children } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
};
