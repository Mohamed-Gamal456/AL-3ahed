import { useTranslation } from "react-i18next";
import PageHeader from "../components/common/PageHeader";
import Clients from "../components/Clients/Clients";
import AboutSections from "../components/AboutSections/AboutSections";
import CtaBanner from "../components/CtaBanner/CtaBanner";

export default function About() {
    const { t } = useTranslation();

    // مصفوفة الإحصائيات مستخرجة ديناميكياً من ملف الترجمة
    const aboutStats = [
        { number: "+250", label: t("AboutPage.stats.campaigns") },
        { number: "+2", label: t("AboutPage.stats.experience") },
        { number: "+65", label: t("AboutPage.stats.brands") },
        { number: "91%", label: t("AboutPage.stats.satisfaction") }
    ];

    return (
        <div className="about-page">
            <PageHeader 
                title={t("AboutPage.title")}
                breadcrumb={t("AboutPage.breadcrumb")}
                badgeText={t("AboutPage.badge")}
                description={t("AboutPage.description")}
                stats={aboutStats}
            />

            <AboutSections />
            <Clients />
            <CtaBanner />
        </div>
    );
}