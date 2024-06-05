import React, { useState } from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <a href="#" className="navbar__link  navbar__link--logo">
          <img alt="Disney" src="/disney_logo.svg" />
        </a>
      </div>
      <ul className="footer__list">
        <li className="footer__item footer__item--1">
          <a href="#">About Disney</a>
        </li>
        <li className="footer__item footer__item--1">
          <a href="#">Disney Help</a>
        </li>
        <li className="footer__item footer__item--1">
          <a href="#">Careers</a>
        </li>
        <li className="footer__item footer__item--1">
          <a href="#">Contact Us</a>
        </li>
        <li className="footer__item footer__item--1">
          <a href="#">Advertise With Us</a>
        </li>
        <li className="footer__item footer__item--1">
          <a href="#">Disney® Premier Visa® Card</a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item footer__item--2">
          <a href="#">Terms of Use</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Additional Content Information</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Your US State Privacy Rights</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Children's Online Privacy Policy</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Do not sell or shere my personaly information</a>
        </li>
        <li className="footer__item footer__item--2">
          <a href="#">Interest-Based Ads</a>
        </li>
      </ul>
      <p className="footer__copyright">
        © Disney, All Rights Reserved, Disney Entertainment
      </p>
    </footer>
  );
}
