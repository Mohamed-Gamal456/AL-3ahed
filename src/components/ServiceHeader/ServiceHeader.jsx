import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ServiceHeader.css";

export default function ServiceHeader({ title, serviceName }) {
    const { t } = useTranslation();

    const currentTitle = serviceName || title;

    return (
        <section className="al3-service-header">
            <div className="container">
                <div className="al3-service-header-content text-center">
                    {/* 1. العنوان الرئيسي للخدمة */}
                    <h1 className="al3-service-title fw-bold mb-3">
                        {currentTitle}
                    </h1>

                    {/* 2. Breadcrumb ثلاثي (الرئيسية \ خدماتنا \ اسم الخدمة) */}
                    <nav className="al3-service-breadcrumb d-flex justify-content-center align-items-center gap-2">
                        <Link to="/" className="breadcrumb-link">
                            <i className="fa-solid fa-house me-1"></i>
                            {t("Header.home", "الرئيسية")}
                        </Link>

                        <span className="separator">\</span>

                        <Link to="/services" className="breadcrumb-link">
                            {t("Header.services", "خدماتنا")}
                        </Link>

                        <span className="separator">\</span>

                        <span className="current-page text-white-50">
                            {currentTitle}
                        </span>
                    </nav>
                </div>
            </div>
        </section>
    );
}