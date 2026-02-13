import React, { useState } from "react";
import "../css/muraciet.css";
import { useTranslation } from "react-i18next";

function Muraciet() {
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(t("contact.sentMessage"));
  };

  return (
    <section className="muraciet-section" id="muraciet">
      <div className="muraciet-box">
        <h2 className="muraciet-title">{t("contact.title")}</h2>
        <form className="muraciet-form" onSubmit={handleSubmit}>
          <input type="text" placeholder={t("contact.name")} required />
          <input type="email" placeholder={t("contact.email")} required />
          <input type="tel" placeholder={t("contact.phone")} required />
          <textarea placeholder={t("contact.message")} rows="4" required></textarea>
          <button type="submit" className={`submit-btn ${message && "sent"}`}>
            {message || t("contact.send")}
          </button>
        </form>
      </div>

      <a
        href="https://wa.me/994103109988"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/wpmuraciet.png" alt="WhatsApp" className="wp-icon" />
      </a>
    </section>
  );
}

export default Muraciet;
