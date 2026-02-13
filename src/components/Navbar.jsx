import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "/logo.png";
import azflag from "/azflag.png";
import engflag from "/engflag.png";
import rusflag from "/rusflag.png";
import { useTranslation } from "react-i18next"; // 🔹 əlavə etdik

function Navbar() {
  const [currentFlag, setCurrentFlag] = useState(azflag);
  const [showFlags, setShowFlags] = useState(false);
  const { t, i18n } = useTranslation(); // 🔹 tərcümə funksiyası

  // 🔹 yadda qalan dilə görə aktiv bayrağı göstər
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en") setCurrentFlag(engflag);
    else if (savedLang === "ru") setCurrentFlag(rusflag);
    else setCurrentFlag(azflag);
  }, []);

  // 🔹 dil dəyişən funksiya
  const changeLang = (lang, flag) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentFlag(flag);
    setShowFlags(false);
  };

  const toggleFlags = () => setShowFlags(!showFlags);

  // 🔹 scroll spy eyni qalır
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 150;

      sections.forEach((sec) => {
        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          document
            .querySelectorAll(".navbar-links a")
            .forEach((a) => a.classList.remove("active"));
          const activeLink = document.querySelector(
            `.navbar-links a[href="#${sec.id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <a href="#home">
            <img src={logo} alt="Ailemnet Ekspress" />
          </a>
        </div>

        <div className="navbar-right">
          <nav className="navbar-links">
            <a
              href="#haqqimizda"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#haqqimizda").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.about")}
            </a>

            <a
              href="#tariffs"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent("scrollToTariffsTab", { detail: "internet" })
                );
              }}
            >
              {t("navbar.tariffs")}
            </a>

            <a
              href="#tariffs"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent("scrollToTariffsTab", { detail: "campaign" })
                );
              }}
            >
              {t("navbar.campaigns")}
            </a>

            <a
              href="#xidmetlerimiz"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#xidmetlerimiz";
                document.querySelector("#xidmetler")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.services")}
            </a>

            <a
              href="#erazilerimiz"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#erazilerimiz";
                document.querySelector("#xidmetler")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.areas")}
            </a>

            <a
              href="#odenis"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#odenis").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.payment")}
            </a>

            <a
              href="#muraciet"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#muraciet").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.apply")}
            </a>

            <a
              href="#melumat"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#melumat").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("navbar.info")}
            </a>
          </nav>

          {/* BAYRAQLAR */}
          <div className="flag-wrapper" onClick={toggleFlags}>
            <img src={currentFlag} alt="Selected flag" className="main-flag" />
            <div className={`flag-dropdown ${showFlags ? "show" : ""}`}>
              {currentFlag !== engflag && (
                <img
                  src={engflag}
                  alt="English"
                  title="EN"
                  onClick={() => changeLang("en", engflag)}
                />
              )}
              {currentFlag !== rusflag && (
                <img
                  src={rusflag}
                  alt="Russian"
                  title="RU"
                  onClick={() => changeLang("ru", rusflag)}
                />
              )}
              {currentFlag !== azflag && (
                <img
                  src={azflag}
                  alt="Azerbaijani"
                  title="AZ"
                  onClick={() => changeLang("az", azflag)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
