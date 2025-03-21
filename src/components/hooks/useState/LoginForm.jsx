import { useState } from "react";

export const LoginForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //   For forwarding data to backend
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            required
            autoComplete="off"
            value={user.userName}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
