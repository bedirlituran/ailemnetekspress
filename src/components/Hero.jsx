import "../css/hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // 🔹 Dildə uyğun videonu seçirik
  const videoMap = {
    az: "/heroaz.gif",
    en: "/heroen.gif",
    ru: "/heroru.gif",
  };

  const videoSrc = videoMap[currentLang] || "/heroaz.gif";

  return (
    <section className="hero" id="home">
      <img
        src={videoSrc}
        alt="Hero animation"
        className="hero-video"
      />
    </section>
  );
}

export default Hero;
