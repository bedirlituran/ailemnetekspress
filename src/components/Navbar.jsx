import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "/logo.png";
import azflag from "/azflag.png";
import engflag from "/engflag.png";
import rusflag from "/rusflag.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [currentFlag, setCurrentFlag] = useState(azflag);
  const [showFlags, setShowFlags] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en") setCurrentFlag(engflag);
    else if (savedLang === "ru") setCurrentFlag(rusflag);
    else setCurrentFlag(azflag);
  }, []);

  // Change language
  const changeLang = (lang, flag) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentFlag(flag);
    setShowFlags(false);
  };

  const toggleFlags = () => setShowFlags(!showFlags);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll spy
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
            .querySelectorAll(".navbar-links a, .mobile-nav-links a")
            .forEach((a) => a.classList.remove("active"));
          const activeLink = document.querySelector(
            `.navbar-links a[href="#${sec.id}"], .mobile-nav-links a[href="#${sec.id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for tariffs campaigns
  const scrollToTariffs = (tab) => {
    window.dispatchEvent(new CustomEvent("scrollToTariffsTab", { detail: tab }));
  };

  // Smooth scroll handler
  const handleLinkClick = (e, sectionId, tab = null) => {
    e.preventDefault();
    closeMobileMenu();
    if (tab) {
      scrollToTariffs(tab);
    } else {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
            <img src={logo} alt="Ailemnet Ekspress" />
          </a>
        </div>

        <div className="navbar-right">
          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-links desktop-nav">
            <a
              href="#haqqimizda"
              onClick={(e) => handleLinkClick(e, "#haqqimizda")}
            >
              {t("navbar.about")}
            </a>
            <a
              href="#tariffs"
              onClick={(e) => handleLinkClick(e, "#tariffs", "internet")}
            >
              {t("navbar.tariffs")}
            </a>
            <a
              href="#tariffs"
              onClick={(e) => handleLinkClick(e, "#tariffs", "campaign")}
            >
              {t("navbar.campaigns")}
            </a>
            <a
              href="#xidmetlerimiz"
              onClick={(e) => handleLinkClick(e, "#xidmetler")}
            >
              {t("navbar.services")}
            </a>
            <a
              href="#erazilerimiz"
              onClick={(e) => handleLinkClick(e, "#xidmetler")}
            >
              {t("navbar.areas")}
            </a>
            <a
              href="#odenis"
              onClick={(e) => handleLinkClick(e, "#odenis")}
            >
              {t("navbar.payment")}
            </a>
            <a
              href="#muraciet"
              onClick={(e) => handleLinkClick(e, "#muraciet")}
            >
              {t("navbar.apply")}
            </a>
            <a
              href="#melumat"
              onClick={(e) => handleLinkClick(e, "#melumat")}
            >
              {t("navbar.info")}
            </a>
          </nav>

          {/* FLAG SELECTOR */}
          <div className="flag-wrapper" onClick={toggleFlags}>
            <img src={currentFlag} alt="Selected flag" className="main-flag" />
            <div className={`flag-dropdown ${showFlags ? "show" : ""}`}>
              {currentFlag !== engflag && (
                <img
                  src={engflag}
                  alt="English"
                  title="EN"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeLang("en", engflag);
                  }}
                />
              )}
              {currentFlag !== rusflag && (
                <img
                  src={rusflag}
                  alt="Russian"
                  title="RU"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeLang("ru", rusflag);
                  }}
                />
              )}
              {currentFlag !== azflag && (
                <img
                  src={azflag}
                  alt="Azerbaijani"
                  title="AZ"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeLang("az", azflag);
                  }}
                />
              )}
            </div>
          </div>

          {/* HAMBURGER ICON (mobile only) */}
          <div
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav-links">
            <a
              href="#haqqimizda"
              onClick={(e) => handleLinkClick(e, "#haqqimizda")}
            >
              {t("navbar.about")}
            </a>
            <a
              href="#tariffs"
              onClick={(e) => handleLinkClick(e, "#tariffs", "internet")}
            >
              {t("navbar.tariffs")}
            </a>
            <a
              href="#tariffs"
              onClick={(e) => handleLinkClick(e, "#tariffs", "campaign")}
            >
              {t("navbar.campaigns")}
            </a>
            <a
              href="#xidmetlerimiz"
              onClick={(e) => handleLinkClick(e, "#xidmetler")}
            >
              {t("navbar.services")}
            </a>
            <a
              href="#erazilerimiz"
              onClick={(e) => handleLinkClick(e, "#xidmetler")}
            >
              {t("navbar.areas")}
            </a>
            <a
              href="#odenis"
              onClick={(e) => handleLinkClick(e, "#odenis")}
            >
              {t("navbar.payment")}
            </a>
            <a
              href="#muraciet"
              onClick={(e) => handleLinkClick(e, "#muraciet")}
            >
              {t("navbar.apply")}
            </a>
            <a
              href="#melumat"
              onClick={(e) => handleLinkClick(e, "#melumat")}
            >
              {t("navbar.info")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;