
import "../css/odenis.css";
import { useTranslation } from "react-i18next";

function Odenis() {
  const { t } = useTranslation();

  const payments = [
    {
      id: 1,
      name: "fpay",
      img: "/fpaylogo.png",
      link: "https://fpay.az/guest/payments/new-payment/category/4950/merchant/6305",
    },
    {
      id: 2,
      name: "expresspay",
      img: "/expresspaylogo.png",
      link: "https://expresspay.az/payment/service/1816",
    },
  ];

  return (
    <section className="odenis-section" id="odenis">
      <h2 className="odenis-title">{t("payment.title")}</h2>
      <p className="odenis-subtitle">{t("payment.subtitle")}</p>

      <div className="odenis-grid">
        {payments.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="odenis-card"
          >
            <img src={item.img} alt={item.name} />
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Odenis;
