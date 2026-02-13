
import "../css/melumat.css";
import { useTranslation } from "react-i18next";

function Melumat() {
  const { t } = useTranslation();

  return (
    <footer className="melumat-section" id="melumat">
      <div className="melumat-container">
        <div className="melumat-right">
          <img src="/logo.png" alt="Ailəmnet Ekspress" className="melumat-logo" />

          <div className="melumat-icons">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.png" alt="Instagram" />
            </a>

            <a
              href="https://wa.me/994103109988"
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
            <a href="tel:+994123109988">+994123109988</a>
            <a href="tel:+994103109988">+994103109988</a>
          </div>

          <p className="melumat-email">
            E-mail: <a href="mailto:support@ailemnet.az">support@ailemnet.az</a>
          </p>
        </div>
      </div>

      <div className="melumat-footer">© 2025 Ailəmnet Ekspress MMC</div>
    </footer>
  );
}

export default Melumat;
