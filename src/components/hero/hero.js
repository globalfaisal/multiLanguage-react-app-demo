import React from "react";
import { useTranslation } from "react-i18next";

import "./hero.css";

function Hero() {
  const { t, ready } = useTranslation(["main", "common"]);
  console.log(ready);
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title">{t("hero.title")}</h1>
        <p className="hero__subtitle">
          {t("hero.subtitle", { appName: "NGDB" })}
        </p>
        <div className="hero__cta">
          <span>{t("common:buttons.cta")}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
