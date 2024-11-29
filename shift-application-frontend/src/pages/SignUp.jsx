import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    sessionStorage.setItem("email", formData.email);
    sessionStorage.setItem("password", formData.password);
    setFormData({
      email: "",
      password: "",
      rememberPassword: false,
    });

    console.log("Email and password saved in session storage.",sessionStorage.getItem("email"));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="rememberPassword"
              checked={formData.rememberPassword}
              onChange={handleChange}
            />
            Remember Password
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
