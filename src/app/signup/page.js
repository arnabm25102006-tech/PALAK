"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("palakUser", JSON.stringify(user));

    alert("Account Created!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          PALAK Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "12px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Already have an account?
        </p>

        <button
          onClick={() => {
            window.location.href = "/login";
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}