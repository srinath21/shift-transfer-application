import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
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
    navigate("/");
    console.log("Email and password saved in session storage.", sessionStorage.getItem("email"));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px 40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333333" }}>Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div style={{ width: "100%" }}>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
                fontSize: "14px",
                color: "#555555",
              }}
            >
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  marginTop: "5px",
                  padding: "10px",
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </label>
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
                fontSize: "14px",
                color: "#555555",
              }}
            >
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  marginTop: "5px",
                  padding: "10px",
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </label>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#555555",
            }}
          >
            {/* <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                name="rememberPassword"
                checked={formData.rememberPassword}
                onChange={handleChange}
                style={{ marginRight: "10px" }}
              />
              Remember Password
            </label> */}
          </div>
          {error && (
            <p style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "14px" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#ffffff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
