import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Hero.css";

// =========================
// Animation Variants
// =========================

const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const heroItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const heroVisual = {
    hidden: {
        opacity: 0,
        scale: 0.94,
        x: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero" id="home">

            {/* Background Grid */}
            <div className="hero-grid"></div>

            {/* Glow Effects */}
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container">
                <div className="row align-items-center">

                    {/* =========================
                        Hero Content
                    ========================== */}
                    <div className="col-lg-8">

                        <motion.div
                            className="hero-content"
                            variants={heroContainer}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* Label */}
                            <motion.div
                                className="hero-label"
                                variants={heroItem}
                            >
                                <span></span>
                                {t("Hero.Label")}
                            </motion.div>

                            {/* Title */}
                            <motion.h1 variants={heroItem}>
                                {t("Hero.Title")}
                                <br />
                                <span>{t("Hero.TitleSpan")}</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                className="hero-description"
                                variants={heroItem}
                            >
                                {t("Hero.Description")}
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                className="hero-buttons"
                                variants={heroItem}
                            >
                                <Link
                                    to="/contact"
                                    className="hero-btn primary-btn"
                                >
                                    {t("Hero.contact")}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>

                                <a
                                    href="#services"
                                    className="hero-btn secondary-btn"
                                >
                                    {t("Hero.services")}
                                </a>
                            </motion.div>

                            {/* Services Cards */}
                            <motion.div
                                className="hero-services"
                                variants={heroItem}
                            >

                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className="fa-solid fa-bullhorn"></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {t(
                                                "Hero.serviceCards.paidAds.title"
                                            )}
                                        </h3>

                                        <p>
                                            {t(
                                                "Hero.serviceCards.paidAds.description"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {t(
                                                "Hero.serviceCards.socialMedia.title"
                                            )}
                                        </h3>

                                        <p>
                                            {t(
                                                "Hero.serviceCards.socialMedia.description"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className="fa-solid fa-camera"></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {t(
                                                "Hero.serviceCards.contentCreation.title"
                                            )}
                                        </h3>

                                        <p>
                                            {t(
                                                "Hero.serviceCards.contentCreation.description"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className="fa-solid fa-chart-line"></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {t(
                                                "Hero.serviceCards.marketing.title"
                                            )}
                                        </h3>

                                        <p>
                                            {t(
                                                "Hero.serviceCards.marketing.description"
                                            )}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>

                            {/* Badges */}
                            <motion.div
                                className="hero-badges"
                                variants={heroItem}
                            >

                                <div className="hero-badge">
                                    <i className="fa-solid fa-star"></i>
                                    {t("Hero.badges.creative")}
                                </div>

                                <div className="hero-badge">
                                    <i className="fa-regular fa-clock"></i>
                                    {t("Hero.badges.content")}
                                </div>

                            </motion.div>

                            {/* Short Description */}
                            <motion.p
                                className="hero-short-description"
                                variants={heroItem}
                            >
                                {t("Hero.shortDescription")}
                            </motion.p>

                            {/* Statistics */}
                            <motion.div
                                className="hero-stats"
                                variants={heroItem}
                            >

                                <div className="stat">
                                    <strong>+50</strong>
                                    <span>
                                        {t("Hero.stats.projects")}
                                    </span>
                                </div>

                                <div className="stat">
                                    <strong>+100</strong>
                                    <span>
                                        {t("Hero.stats.designs")}
                                    </span>
                                </div>

                                <div className="stat">
                                    <strong>+20</strong>
                                    <span>
                                        {t("Hero.stats.clients")}
                                    </span>
                                </div>

                            </motion.div>

                        </motion.div>

                    </div>

                    {/* =========================
                        Hero Visual
                    ========================== */}
                    <div className="col-lg-4">

                        <motion.div
                            className="hero-visual"
                            variants={heroVisual}
                            initial="hidden"
                            animate="visible"
                        >

                            <div className="visual-ring ring-one"></div>
                            <div className="visual-ring ring-two"></div>

                            <div className="visual-logo">
                                <span>AL</span>
                                <small>3AHED</small>
                            </div>

                            {/* Floating Cards */}

                            <div className="floating-card card-top">
                                <i className="fa-solid fa-arrow-trend-up"></i>

                                <div>
                                    <strong>
                                        {t("Hero.visual.growth")}
                                    </strong>

                                    <span>+85%</span>
                                </div>
                            </div>

                            <div className="floating-card card-right">
                                <i className="fa-solid fa-chart-simple"></i>

                                <div>
                                    <strong>
                                        {t("Hero.visual.results")}
                                    </strong>

                                    <span>+120%</span>
                                </div>
                            </div>

                            <div className="floating-card card-bottom">
                                <i className="fa-solid fa-users"></i>

                                <div>
                                    <strong>
                                        {t("Hero.visual.clients")}
                                    </strong>

                                    <span>+20</span>
                                </div>
                            </div>

                        </motion.div>

                    </div>

                </div>
            </div>

        </section>
    );
}