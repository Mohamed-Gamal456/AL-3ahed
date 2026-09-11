import { useTranslation } from "react-i18next";
import "./WhyUs.css";

export default function WhyUs() {
    const { t } = useTranslation();

    const features = [
        {
            id: 1,
            icon: "fa-solid fa-chart-column",
            title: t("WhyUs.Cards.card1.Title"),
            description: t("WhyUs.Cards.card1.Description"),
        },
        {
            id: 2,
            icon: "fa-solid fa-cube",
            title: t("WhyUs.Cards.card2.Title"),
            description: t("WhyUs.Cards.card2.Description"),
        },
        {
            id: 3,
            icon: "fa-solid fa-user",
            title: t("WhyUs.Cards.card3.Title"),
            description: t("WhyUs.Cards.card3.Description"),
        },
        {
            id: 4,
            icon: "fa-solid fa-shield-halved",
            title: t("WhyUs.Cards.card4.Title"),
            description: t("WhyUs.Cards.card4.Description"),
        },
    ];

    return (
        <section className="al3-whyus" id="why-us">
            <div className="container">
                {/* Header */}
                <div className="al3-whyus-header">
                    <span className="al3-whyus-badge">
                        {t("WhyUs.Badge")}
                    </span>

                    <h2>{t("WhyUs.Title")}</h2>

                    <p>{t("WhyUs.Description")}</p>
                </div>

                {/* Cards Container */}
                <div className="al3-whyus-grid">
                    {features.map((card) => (
                        <div className="al3-whyus-card" key={card.id}>
                            <div className="al3-whyus-icon">
                                <i className={card.icon}></i>
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="al3-whyus-stats-bar">
                    <div className="al3-whyus-stat-item highlight">
                        {t("WhyUs.Stats.projects")}
                    </div>
                    <div className="al3-whyus-stat-item">
                        {t("WhyUs.Stats.experience")}
                    </div>
                    <div className="al3-whyus-stat-item highlight">
                        {t("WhyUs.Stats.clients")}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="al3-whyus-actions">
                    <a
                        href="https://wa.me/201030369897"
                        target="_blank"
                        rel="noreferrer"
                        className="al3-whyus-btn btn-primary"
                    >
                        {t("WhyUs.Buttons.start")}
                    </a>
                    <a href="#services" className="al3-whyus-btn btn-outline">
                        {t("WhyUs.Buttons.explore")}
                    </a>
                </div>
            </div>
        </section>
    );
}