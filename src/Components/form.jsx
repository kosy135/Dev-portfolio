import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    if (!username || !email || !password || !ConfirmPassword) {
      alert("All fields must be filled");
    } else if (password !== ConfirmPassword) {
      alert("Password and confirm password must be the same");
    } else if (password.length !== 10) {
      alert("Password must be exactly 10 characters long");
    } else {
      navigate("/artpage");
    }
  }

  const inputStyle =
    "bg-white text-black w-60 pl-8 rounded-2xl py-1.5 placholder:text-black";
  const imgStyle = "absolute inset-y-0 top-3 left-2 h-4 w-4";

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div>
          <div className="relative mb-5">
            <img src="/User-(1).png" alt="" className={imgStyle} />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="bg-white text-black w-60 pl-8 rounded-2xl py-1.5 placholder:text-black"
            />
          </div>
        </div>
        <div className="relative mb-5">
          <img src="/EnvelopeSimple.png" alt="" className={imgStyle} />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={inputStyle}
          />
        </div>
        <div className="relative mb-5">
          <img src="/LockKey.png" alt="" className={imgStyle} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className={inputStyle}
          />
        </div>
        <div className="relative">
          <img src="/LockKey.png" alt="" className={imgStyle} />
          <input
            type="password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={inputStyle}
          />
        </div>
        <button className="mt-5 text-white bg-purple-600 w-60 py-1.5 rounded-2xl cursor-pointer">
          Create account
        </button>
      </form>
    </div>
  );
}
export default form;
