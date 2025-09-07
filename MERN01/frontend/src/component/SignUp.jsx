import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/signUp", user);
      setMessage(res.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error signing up. Please try again.");
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br />
        <select name="role" value={user.role} onChange={handleChange}>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
          <option value="Visitor">Visitor</option>
        </select>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
