import React, { useState, useEffect } from "react";
import "../css/tariffsandcampaign.css";
import { useTranslation } from "react-i18next";

const Tariffsandcampaign = () => {
  const [activeTab, setActiveTab] = useState("internet");
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("muraciet");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollToTab = (event) => {
      if (event.detail === "campaign") {
        setActiveTab("campaign");
      } else if (event.detail === "internet") {
        setActiveTab("internet");
      }

      document.getElementById("tariffs")?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scrollToTariffsTab", handleScrollToTab);
    return () =>
      window.removeEventListener("scrollToTariffsTab", handleScrollToTab);
  }, []);

  return (
    <section className="tariffsac-section" id="tariffs">
      <h2 className="tariffsac-title">
        {activeTab === "campaign"
          ? t("tariffs.titleCampaigns")
          : t("tariffs.titleTariffs")}
      </h2>

      {/* Tabs */}
      <div className="tariffsac-tabs">
        <button
          className={`tariffsac-tab ${activeTab === "internet" ? "active" : ""}`}
          onClick={() => setActiveTab("internet")}
        >
          {t("tariffs.tabInternet")}
        </button>
        <button
          className={`tariffsac-tab ${activeTab === "tv" ? "active" : ""}`}
          onClick={() => setActiveTab("tv")}
        >
          {t("tariffs.tabInternetTV")}
        </button>
        <button
          className={`tariffsac-tab ${activeTab === "campaign" ? "active" : ""}`}
          onClick={() => setActiveTab("campaign")}
        >
          {t("tariffs.tabCampaigns")}
        </button>
      </div>

      {/* Content */}
      <div className="tariffsac-content">
        {activeTab === "internet" && (
          <div className="tariffsac-cards">
          
            <div className="tariffsac-card">
              <h3>25 AZN</h3>
              <p>100 Mbit/s</p>
              <button onClick={scrollToContact}>{t("tariffs.join")}</button>
            </div>
         
          </div>
        )}

        {activeTab === "tv" && (
          <div className="tariffsac-cards">
         
            <div className="tariffsac-card">
              <h3>30 AZN</h3>
              <p>100 Mbit/s + TV</p>
              <button onClick={scrollToContact}>{t("tariffs.join")}</button>
            </div>
        
          </div>
        )}

        {activeTab === "campaign" && (
          <div className="tariffsac-cards">
            <div className="tariffsac-card single">
              <h3>{t("tariffs.promoTitle")}</h3>
              <p className="campaign-text">
                6 {t("tariffs.months")} <strong>{t("tariffs.pay")}</strong> <br />
                1 {t("tariffs.month")} <strong>{t("tariffs.free")}</strong>
              </p>
              <button onClick={scrollToContact}>
                {t("tariffs.joinNow")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tariffsandcampaign;
