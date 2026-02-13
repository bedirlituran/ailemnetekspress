
import "../css/melumat.css";
import { useTranslation } from "react-i18next";

function Melumat() {
  const { t } = useTranslation();

  return (
    <footer className="melumat-section" id="melumat">
      <div className="melumat-container">
        <div className="melumat-right">
          LEOTELECOM

          <div className="melumat-icons">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.png" alt="Instagram" />
            </a>

            <a
              href="https://wa.me/994774466017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="melumat-left">
          <h3>{t("footer.contactTitle")}</h3>
          <p className="melumat-address">{t("footer.address")}</p>

          <div className="melumat-numbers">
            <a href="tel:+994774466017">+994774466017</a>
            <a href="tel:+994774466017">+994774466017</a>
          </div>

          <p className="melumat-email">
            E-mail: <a href="mailto:tsn121236@gmail.com">tsn121236@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="melumat-footer">© 2025 Leo Telecom MMC</div>
    </footer>
  );
}

export default Melumat;
