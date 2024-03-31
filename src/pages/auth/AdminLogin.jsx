import React, { useState } from "react";
import "./AdminLogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [action, setAction] = useState("Admin Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
          <FaUser />
          <input type="username" placeholder="Username"></input>
        </div>
        <div className="input">
          <FaLock />
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      <div className="submit-container">
        <div
          className={action === "AdminLogin" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
