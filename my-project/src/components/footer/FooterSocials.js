import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

const socials = [
  {
    id: 1,
    href: "",
    img: Github,
    name: Github
  },
  {
    id: 2,
    href: "",
    img: Linkedin,
    name: Linkedin
  },
  {
    id: 3,
    href: "",
    img: Website,
    name: Website
  }
];

const FooterSocials = () => {

  return (
    <ul className="footer__socials">
      {socials.map(social =>
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
          >
            <span aria-hidden="true">{social.name}</span>
            <img src={social.img} alt="" aria-hidden="true" width={50}
              height={50} />
          </a>
        </li>)}
    </ul>
  );
}

export default FooterSocials