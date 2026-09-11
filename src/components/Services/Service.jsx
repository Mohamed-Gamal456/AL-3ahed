import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // 1. استيراد Link

import ads from "../../assets/images/services/Ads-Image1.jpg";
import content from "../../assets/images/services/ContentCreation.jpg";
import mang from "../../assets/images/services/SocialMediaManagement.jpg";
import design from "../../assets/images/services/GRAPHICDESIGNING.jpg";
import market from "../../assets/images/services/MarketingStrategy.jpg";
import video from "../../assets/images/services/VideoProduction.jpg";

import "./Service.css";

export default function Service() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language.startsWith("ar");

    const services = [
        {
            id: 1,
            slug: "paid-ads", // الـ URL للخدمة
            image: ads,
            title: t("Services.Service1.Title"),
            description: t("Services.Service1.Description"),
            button: t("Services.Service1.Button"),
        },
        {
            id: 2,
            slug: "social-media",
            image: mang,
            title: t("Services.Service2.Title"),
            description: t("Services.Service2.Description"),
            button: t("Services.Service2.Button"),
        },
        {
            id: 3,
            slug: "content-creation",
            image: content,
            title: t("Services.Service3.Title"),
            description: t("Services.Service3.Description"),
            button: t("Services.Service3.Button"),
        },
        {
            id: 4,
            slug: "graphic-design",
            image: design,
            title: t("Services.Service4.Title"),
            description: t("Services.Service4.Description"),
            button: t("Services.Service4.Button"),
        },
        {
            id: 5,
            slug: "video-production",
            image: video,
            title: t("Services.Service5.Title"),
            description: t("Services.Service5.Description"),
            button: t("Services.Service5.Button"),
        },
        {
            id: 6,
            slug: "marketing-strategy",
            image: market,
            title: t("Services.Service6.Title"),
            description: t("Services.Service6.Description"),
            button: t("Services.Service6.Button"),
        },
    ];

    return (
        <section className="al3-services" id="services">
            <div className="container">
                {/* Section Header */}
                <div className="al3-services-header">
                    <h2>{t("Services.Title")}</h2>
                    <span className="al3-services-line"></span>
                    <p>{t("Services.Description")}</p>
                </div>

                {/* Services */}
                <div className="row g-4">
                    {services.map((service) => (
                        <div className="col-lg-4 col-md-6" key={service.id}>
                            <article className="al3-service-card">
                                {/* Image */}
                                <div className="al3-service-image">
                                    <img src={service.image} alt={service.title} />
                                    <span className="al3-service-badge">
                                        {isArabic ? "خدمة" : "Service"}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="al3-service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    {/* 2. تحويل الـ a إلى Link للانتقال للمسار الديناميكي */}
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="al3-service-link"
                                    >
                                        <span>{service.button}</span>
                                        <i
                                            className={
                                                isArabic
                                                    ? "fa-solid fa-arrow-left"
                                                    : "fa-solid fa-arrow-right"
                                            }
                                        ></i>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}