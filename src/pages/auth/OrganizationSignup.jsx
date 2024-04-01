import React, { useState } from "react";
import "./AdminLogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const OrganizationSignup = () => {
  const [action, setAction] = useState("Organization Signup");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
          <FaUser size={20} />
          <input type="organname" placeholder="Organization Name"></input>
        </div>
        <div className="input">
          <AiOutlineMail size={20} />
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <FaLock size={20}/>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="input">
          <FaLock size={20}/>
          <input type="confirm password" placeholder="Confirm Password"></input>
        </div>
      </div>
      <div className="submit-container">
        <div
          className={action === "AdminLogin" ? "submit gray" : "submit"}
          onClick={() => {
            setAction(action === "Signup" ? "Login" : "Signup");
          }}
        >
          Signup
        </div>
      </div>
    </div>
  );
};

export default OrganizationSignup;
