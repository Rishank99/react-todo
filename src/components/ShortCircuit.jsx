import { useState } from "react";

export const ShortCircuit = () => {
  // 2
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // 5
  const [user, setUser] = useState("");
  return (
    <section>
      <h1>ShortCircuit Evaluation</h1>

      {/* Conditional rendering using short circuit evalaution */}
      {/* 3 */}
      {isLoggedIn && <p>You are logged in!</p>}

      {/* Another example of short circuit evaluation */}
      {/* 6 */}
      {user ? `Hello ${user}` : "Please log in!"}
      <div>
        {/* 1 */}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        {/* 4 */}
        <button onClick={() => setUser("Rishank")}>Set User</button>
        {/* 7 */}
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};
