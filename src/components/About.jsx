import React from "react";
import "../css/about.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="haqqimizda">
      <div className="about-container">
        <div className="about-text-box">
          <h2>{t("about.title")}</h2>
          <p>{t("about.text1")}</p>
          <p>{t("about.text2")}</p>
        </div>

        <div className="about-video-box">
          <img src="/networkiconrotate.gif" alt="network animation" />
        </div>
      </div>
    </section>
  );
}

export default About;