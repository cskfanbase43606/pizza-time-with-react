import React from "react";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import FooterMenu from "./FooterMenu";
import './footer.css';

const Footer = () => {
  return (
    <footer className="flex-container flex-column txt-center txt-white pop-font">
      <FooterMenu />
      <hr />
      <FooterLegal />
      <hr />
      <FooterContact />
    </footer>
  );
}

export default Footer;