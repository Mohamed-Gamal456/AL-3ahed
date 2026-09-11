import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./PageHeader.css";

export default function PageHeader({ 
    badgeText, 
    title, 
    description, 
    breadcrumb, 
    stats 
}) {
    const { t } = useTranslation();

    return (
        <section className="al3-page-header">
            <div className="container">
                {/* 1. Breadcrumb + Badge */}
                <div className="al3-header-top">
                    <nav className="al3-breadcrumb">
                        <Link to="/">{t("Header.home")}</Link>
                        <span className="separator">/</span>
                        <span className="current">{breadcrumb || title}</span>
                    </nav>

                    {badgeText && (
                        <span className="al3-header-badge">
                            {badgeText}
                        </span>
                    )}
                </div>

                {/* 2. Main Title & Description */}
                <h1 className="al3-header-title">{title}</h1>
                {description && <p className="al3-header-desc">{description}</p>}

                {/* 3. CTA Buttons */}
                <div className="al3-header-btns">
                    <a href="https://wa.me/201030369897" target="_blank" rel="noreferrer" className="btn-primary-custom">
                        {t("PageHeader.Start")}
                        <i className="fa-solid fa-paper-plane ms-2"></i>
                    </a>
                    <a href="#our-story" className="btn-secondary-custom">
                        {t("PageHeader.MyStory")} 
                        <i className="fa-solid fa-arrow-down ms-2"></i>
                    </a>
                </div>

                {/* 4. Dynamic Stats Cards */}
                {stats && stats.length > 0 && (
                    <div className="al3-header-stats">
                        {stats.map((item, index) => (
                            <div key={index} className="al3-stat-card">
                                <h3>{item.number}</h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}