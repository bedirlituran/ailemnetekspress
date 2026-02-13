import React from "react";
import "../css/xidmetleranderaziler.css";
import { useTranslation } from "react-i18next";

function Xidmetleranderaziler() {
  const { t } = useTranslation();

  return (
    <section className="xidmetler-section" id="xidmetler">
      <div className="main-rectangle">
        <div id="xidmetlerimiz">
          <h2 className="section-title">{t("services.title")}</h2>
          
          <div className="cards-wrapper">
            <div className="service-card">
              <p>{t("services.internet")}</p>
            </div>
            <div className="service-card">
              <p>{t("services.wireless")}</p>
            </div>
            <div className="service-card">
              <p>{t("services.iptv")}</p>
            </div>
            <div className="service-card">
              <p>{t("services.ipphone")}</p>
            </div>
          </div>

          <button
            className="join-btn"
            onClick={() => {
              document.querySelector("#muraciet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("services.join")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Xidmetleranderaziler;
