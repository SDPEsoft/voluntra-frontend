import React, { useState } from 'react'
import './AdminLogin.css'

import user_icon from '../assets/email.png'
import passwrod_icon from '../assets/password.png'

const AdminLogin = () => {

    const [action,setAction] = useState("Admin Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="username" placeholder="Username"></input>
            </div>
            <div className="input">
                <img src={passwrod_icon} alt="" />
                <input type="password" placeholder="Password"></input>
            </div>
        </div>
        <div className="submit-container">
            <div className={action==="AdminLogin"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      
    </div>
  )
}

export default AdminLogin
