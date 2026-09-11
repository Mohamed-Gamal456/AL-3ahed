import { useTranslation } from "react-i18next";
import "./ServiceOverview.css";

export default function ServiceOverview({ serviceKey, image }) {
    const { t } = useTranslation();

    const features = t(`servicesData.${serviceKey}.features`, { returnObjects: true }) || [];

    return (
        <section className="al3-service-overview py-5">
            <div className="container py-md-4">
                <div className="row align-items-center g-4 g-lg-5">
                    
                    <div className="col-lg-6">
                        <div className="al3-overview-content">
                            
                            <h2 className="al3-overview-title fw-bold text-dark mb-3">
                                {t(`servicesData.${serviceKey}.title`)}
                            </h2>

                            <p className="al3-overview-desc text-muted mb-4">
                                {t(`servicesData.${serviceKey}.description`)}
                            </p>

                            {Array.isArray(features) && features.length > 0 && (
                                <ul className="al3-overview-features list-unstyled mb-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="d-flex align-items-center mb-3">
                                            <span className="feature-dot me-3 ms-3"></span>
                                            <span className="feature-text text-dark fw-medium">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {t(`servicesData.${serviceKey}.subtitle`) && (
                                <p className="al3-overview-subtitle text-muted mb-0">
                                    {t(`servicesData.${serviceKey}.subtitle`)}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="al3-overview-image-wrapper  bg-white rounded-4 shadow-sm border text-center">
                            <img
                                src={image}
                                alt={t(`servicesData.${serviceKey}.title`)}
                                className="img-fluid rounded-4 w-100 object-fit-cover"
                                style={{ maxHeight: "430px" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}