import { useState } from "react";
export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  // Derived state: count of users
  const userCount = users.length;
  // Derived state: avaerage age of users
  const avaerageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} years old
            </li>
          );
        })}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {avaerageAge}</p>
    </div>
  );
};
