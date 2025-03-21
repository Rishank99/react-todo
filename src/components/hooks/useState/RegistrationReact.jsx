import { useState } from "react";

export const RegistrationReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setUser((prev) => console.log(prev));
    // setUser((prev) => ({ ...prev, name: value }));
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(user);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={user.password}
            onChange={handleInputChange}
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="9374747373"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
};
