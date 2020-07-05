import React from "react";
import { useTranslation } from "react-i18next";

import "./navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation("common");

  return (
    <nav role="navigation" className="navbar">
      <ul className="navbar__nav-list">
        <li className="navbar__nav-item">
          <a href="#!" className="navbar__nav-link">
            {t("nav_menu.about")}
          </a>
        </li>
        <li className="navbar__nav-item">
          <a href="#!" className="navbar__nav-link">
            {t("nav_menu.blog")}
          </a>
        </li>
        <li className="navbar__nav-item">
          <a href="#!" className="navbar__nav-link">
            {t("nav_menu.careers")}
          </a>
        </li>
        <li className="navbar__nav-item">
          <a href="#!" className="navbar__nav-link">
            {t("nav_menu.contact")}
          </a>
        </li>
        <li className="navbar__lang-selectors">
          <div
            role="presentation"
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "selector active" : "selector"}
          >
            {/* <img src={imageGBUrl} alt="EN" /> */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="GB">
                <path
                  id="Vector"
                  d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                  fill="#EEEEEE"
                />
                <path
                  id="Vector_2"
                  d="M52.9998 100.1C32.561 126.611 17.542 156.887 8.7998 189.2H142L52.9998 100.2V100.1ZM503.2 189.2C494.476 156.929 479.491 126.689 459.1 100.2L370.1 189.2H503.1H503.2ZM8.7998 322.8C17.524 355.07 32.5082 385.311 52.8998 411.8L141.9 322.8H8.9998H8.7998ZM411.8 52.8998C385.302 32.5438 355.063 17.5938 322.8 8.8998V142L411.8 52.9998V52.8998ZM100.2 459.1C126.727 479.468 157.002 494.418 189.3 503.1V370L100.3 459L100.2 459.1ZM189.2 8.7998C156.929 17.524 126.689 32.5082 100.2 52.8998L189.2 142V8.7998ZM322.8 503.2C355.07 494.476 385.311 479.491 411.8 459.1L322.8 370.1V503.1V503.2ZM370 322.8L459 411.8C479.427 385.319 494.445 355.078 503.2 322.8H370Z"
                  fill="#0052B4"
                />
                <g id="Group">
                  <path
                    id="Vector_3"
                    d="M509.8 222.6H289.4V2.2C278.326 0.746148 267.169 0.0112758 256 0C244.7 0 233.5 0.7 222.6 2.2V222.6H2.2C0.746148 233.674 0.0112758 244.831 0 256C0 267.3 0.7 278.5 2.2 289.4H222.6V509.8C244.773 512.69 267.227 512.69 289.4 509.8V289.4H509.8C511.254 278.326 511.989 267.169 512 256C512 244.7 511.3 233.5 509.8 222.6Z"
                    fill="#D80027"
                  />
                  <path
                    id="Vector_4"
                    d="M322.8 322.8L437 437C442.234 431.753 447.239 426.281 452 420.6L354.3 322.8H322.8ZM189.2 322.8L75 437C80.2475 442.234 85.7193 447.239 91.4 452L189.2 354.3V322.8ZM189.2 189.2L75 75C69.7655 80.2475 64.7608 85.7193 60 91.4L157.7 189.2H189.2ZM322.8 189.2L437 75C431.753 69.7652 426.281 64.7605 420.6 60L322.8 157.7V189.2Z"
                    fill="#D80027"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div
            role="presentation"
            onClick={() => i18n.changeLanguage("sv")}
            className={i18n.language === "sv" ? "selector active" : "selector"}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SE">
                <g clip-path="url(#clip0)">
                  <path
                    id="Vector"
                    d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                    fill="#FFDA44"
                  />
                  <path
                    id="Vector_2"
                    d="M200.3 222.6H509.8C501.697 161.023 471.484 104.492 424.791 63.5383C378.097 22.5851 318.108 0.00335418 256 0.000486503C237.27 -0.0359645 218.592 1.976 200.3 6.00049V222.6ZM133.6 222.6V31.1005C98.1623 50.4146 67.7889 77.8277 44.9545 111.106C22.1201 144.385 7.4707 182.587 2.20001 222.6H133.6ZM133.6 289.4H2.20001C7.4707 329.414 22.1201 367.616 44.9545 400.895C67.7889 434.173 98.1623 461.586 133.6 480.9V289.4ZM200.3 289.4V505.9C218.589 509.959 237.266 512.004 256 512C318.108 511.998 378.097 489.416 424.791 448.463C471.484 407.509 501.697 350.978 509.8 289.4H200.3Z"
                    fill="#0052B4"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0 0H512V512H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
