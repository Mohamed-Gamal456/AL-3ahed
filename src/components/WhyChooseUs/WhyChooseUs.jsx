import { useTranslation } from "react-i18next";
import "./WhyChooseUs.css";

export default function WhyChooseUs({ serviceKey }) {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language.startsWith("ar");

    const sectionTitle = t(`servicesData.${serviceKey}.whyUsTitle`, "لماذا تختار العاهد؟");
    const sectionSubtitle = t(`servicesData.${serviceKey}.whyUsSubtitle`, "");

    const rawWhyUs = t(`servicesData.${serviceKey}.whyUs`, { returnObjects: true });
    
    const whyUsList = Array.isArray(rawWhyUs) 
        ? rawWhyUs 
        : (typeof rawWhyUs === "object" && rawWhyUs !== null ? Object.values(rawWhyUs) : []);

    console.log("Current ServiceKey:", serviceKey);
    console.log("Fetched whyUs Data:", whyUsList);

    return (
        <section className="al3-why-choose-us py-5">
            <div className="container py-md-4">
                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="why-title fw-bold text-white mb-3">
                        {sectionTitle}
                    </h2>
                    {sectionSubtitle && (
                        <p className="why-subtitle text-white-50 mx-auto">
                            {sectionSubtitle}
                        </p>
                    )}
                </div>

                {/* Grid Cards */}
                {whyUsList.length > 0 ? (
                    <div className="row g-4 justify-content-center">
                        {whyUsList.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="why-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="market-problem-box p-3 rounded-3 mb-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fa-solid fa-circle-xmark text-danger me-2 ms-2"></i>
                                                <span className="problem-label fw-bold text-white-50 small">
                                                    {isArabic ? "خطأ شائع في السوق:" : "Common Market Mistake:"}
                                                </span>
                                            </div>
                                            <p className="problem-text text-white-50 mb-0 small">
                                                {item.problem}
                                            </p>
                                        </div>

                                        <div className="ahed-solution-box">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="fa-solid fa-circle-check text-success me-2 ms-2"></i>
                                                <span className="solution-label fw-bold text-primary small">
                                                    {isArabic ? "مع العاهد:" : "With Al-3Ahed:"}
                                                </span>
                                            </div>
                                            <p className="solution-text text-white mb-0 fw-medium">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-white-50 py-3">
                        <small>لا توجد بيانات مقارنة متاحة للمفتاح: <code>{serviceKey}</code></small>
                    </div>
                )}
            </div>
        </section>
    );
}