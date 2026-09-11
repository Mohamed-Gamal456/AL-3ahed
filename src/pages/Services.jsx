import { useTranslation } from "react-i18next";
import PageHeader from "../components/common/PageHeader";
import Service from "../components/Services/Service";
import FAQ from "../components/FAQ/FAQ";

export default function Services() {
    const { t } = useTranslation();


    return (
        <div className="about-page">
            <PageHeader 
                title={t("servicesSection.title")}
                breadcrumb={t("servicesSection.breadcrumb")}
                badgeText={t("servicesSection.badge")}
                description={t("servicesSection.subtitle")}
            />
            <Service />
            <FAQ />
        </div>
    );
}