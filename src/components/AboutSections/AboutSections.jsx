import { useTranslation } from "react-i18next";
import logoCard from "../../assets/images/logo-main-white.png";
import "./AboutSections.css";

export default function AboutSections() {
    const { t } = useTranslation();

    // جلب قائمة المميزات كأراي من الملف مباشرة
    const featuresList = t("whyUsPage.story.features", { returnObjects: true });

    return (
        <div className="alahed-about-container">
            {/* ================= 1. قسم قصتنا (Story Section) ================= */}
            <section className="alahed-story-section py-5">
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Right / Text Content */}
                        <div className="col-lg-7">
                            <span className="section-badge mb-2">{t("whyUsPage.story.badge")}</span>
                            <h2 className="section-main-title mb-3">
                                {t("whyUsPage.story.title")}
                            </h2>
                            <p className="section-text text-muted mb-3">
                                {t("whyUsPage.story.desc1")}
                            </p>

                            {/* Features Check List */}
                            <div className="features-list mb-4">
                                {Array.isArray(featuresList) && featuresList.map((item, index) => (
                                    <div key={index} className="feature-item">
                                        <i className="fa-solid fa-circle-check check-icon"></i>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="section-text text-muted">
                                {t("whyUsPage.story.desc2")}
                            </p>
                        </div>

                        {/* Left / Visual Branding Card */}
                        <div className="col-lg-5 card-image">
                            <div className="story-image-card">
                                <img src={logoCard} alt="AL-3AHED Marketing Agency" className="story-logo" />
                                <h3>العاهد ماركتينج</h3>
                                <p>AL-3AHED Marketing Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 2. قسم لماذا تختارنا (Why Choose Us Section) ================= */}
            <section className="alahed-whyus-section py-5">
                <div className="container text-center">
                    <span className="section-badge mb-2">{t("whyUsPage.badge")}</span>
                    <h2 className="section-main-title mb-3">
                        {t("whyUsPage.title")}
                    </h2>
                    <p className="section-subtitle text-muted mx-auto mb-5">
                        {t("whyUsPage.subtitle")}
                    </p>

                    {/* Cards Grid */}
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="why-card">
                                <div className="card-icon">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h4>{t("whyUsPage.cards.strategyTitle")}</h4>
                                <p>{t("whyUsPage.cards.strategyDesc")}</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="why-card">
                                <div className="card-icon">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                <h4>{t("whyUsPage.cards.executionTitle")}</h4>
                                <p>{t("whyUsPage.cards.executionDesc")}</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="why-card">
                                <div className="card-icon">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <h4>{t("whyUsPage.cards.experienceTitle")}</h4>
                                <p>{t("whyUsPage.cards.experienceDesc")}</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="why-card">
                                <div className="card-icon">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h4>{t("whyUsPage.cards.supportTitle")}</h4>
                                <p>{t("whyUsPage.cards.supportDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}