import React from "react";
import "./Style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">

        <div className="footer-top">
          <h4 className="voluntra-text">VOLUNTRA</h4>
          <div className="social-icons">
            {/* <a href="#"><img src={require("../assets/images/facebook-logo.png")} alt="Facebook" style={{ width: '38px', height: '38px' }} /></a>
        <a href="#"><img src={require("../assets/images/instagram-logo.png")} alt="Instagram" style={{ width: '30px', height: '30px' }} /></a>
        <a href="#"><img src={require("../assets/images/linkedin-logo.png")} alt="LinkedIn" style={{ width: '30px', height: '30px' }} /></a>
        <a href="#"><img src={require("../assets/images/x-logo.png")} alt="X Logo" style={{ width: '38px', height: '38px' }} /></a> */}
          </div>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 VOLUNTRA. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;