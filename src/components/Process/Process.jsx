import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Process.css";

export default function Process() {
    const { t, i18n } = useTranslation();

    const isArabic = i18n.language.startsWith("ar");

    const processSteps = [
        {
            id: 1,
            icon: "fa-solid fa-comments",
            title: t("Process.Step1.Title"),
            description: t("Process.Step1.Description"),
        },
        {
            id: 2,
            icon: "fa-solid fa-file-lines",
            title: t("Process.Step2.Title"),
            description: t("Process.Step2.Description"),
        },
        {
            id: 3,
            icon: "fa-solid fa-chart-line",
            title: t("Process.Step3.Title"),
            description: t("Process.Step3.Description"),
        },
        {
            id: 4,
            icon: "fa-solid fa-rocket",
            title: t("Process.Step4.Title"),
            description: t("Process.Step4.Description"),
        },
    ];

    return (
        <section className="al3-process" id="process">

            <div className="container">

                {/* =========================
                    Section Header
                ========================== */}

                <div className="al3-process-header">

                    <span className="al3-process-badge">
                        {t("Process.Badge")}
                    </span>

                    <div className="al3-process-title-wrapper">

                        <span className="al3-process-title-line"></span>

                        <h2>
                            {t("Process.Title")}
                        </h2>

                        <span className="al3-process-title-line"></span>

                    </div>

                    <p>
                        {t("Process.Description")}
                    </p>

                </div>


                {/* =========================
                    Process Steps
                ========================== */}

                <div className="al3-process-wrapper">

                    <div className="al3-process-line"></div>

                    <div className="row g-4">

                        {processSteps.map((step) => (

                            <div
                                className="col-lg-3 col-md-6 al3-process-item"
                                key={step.id}
                            >

                                {/* Icon */}
                                <div className="al3-process-icon-wrapper">

                                    <span className="al3-process-number">
                                        {step.id}
                                    </span>

                                    <div className="al3-process-icon">
                                        <i className={step.icon}></i>
                                    </div>

                                </div>


                                {/* Card */}
                                <div className="al3-process-card">

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* =========================
                    Transparency Message
                ========================== */}

                <div className="al3-process-note">

                    <i className="fa-solid fa-shield-halved"></i>

                    <p>
                        {t("Process.Note")}
                    </p>

                </div>


                {/* =========================
                    CTA
                ========================== */}

                <div className="al3-process-cta">

                    <Link
                        to="/contact"
                        className="al3-process-button"
                    >
                        <span>
                            {t("Process.Button")}
                        </span>

                        <i
                            className={
                                isArabic
                                    ? "fa-solid fa-arrow-left"
                                    : "fa-solid fa-arrow-right"
                            }
                        ></i>
                    </Link>

                </div>

            </div>

        </section>
    );
}