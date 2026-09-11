import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./CtaBanner.css";

export default function CtaBanner() {
    const { t } = useTranslation();

    return (
        <section className="alahed-cta-section text-center">
            <div className="container">
                <h2 className="cta-title mb-3">
                    {t("whyUsPage.cta.title")}
                </h2>
                <p className="cta-subtitle mx-auto mb-4">
                    {t("whyUsPage.cta.subtitle")}
                </p>
                <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                    <Link to="/contact" className="btn-cta-main">
                        <i className="fa-regular fa-comments ms-2"></i>
                        {t("whyUsPage.cta.startBtn")}
                    </Link>
                    <Link to="/services" className="btn-cta-outline">
                        <i className="fa-solid fa-layer-group ms-2"></i>
                        {t("whyUsPage.cta.servicesBtn")}
                    </Link>
                </div>
            </div>
        </section>
    );
}