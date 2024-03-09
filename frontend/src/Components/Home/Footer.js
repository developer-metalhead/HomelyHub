import React from "react";
import "../../CSS/Home.css"
const Footer = () => {
  return (
    <div>
      <footer className="fixed-bottom bg-white p-2">
        <p>@ Kumar Satwik</p>
        <ul className="footerlist">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Company details</li>
        </ul>
        <p>English(IN)</p>
      </footer>
      
    </div>
  );
};

export default Footer;
