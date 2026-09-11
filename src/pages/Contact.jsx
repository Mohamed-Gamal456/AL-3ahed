import { useTranslation } from "react-i18next";
import PageHeader from "../components/common/PageHeader";
import ContactUs from "../components/Contact/ContactUs";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="contact-page">
            <PageHeader 
                title={t("contactPage.title")}
                breadcrumb={t("contactPage.breadcrumb")}
                badgeText={t("contactPage.badge")}
                description={t("contactPage.subtitle")}
            />
            
            <ContactUs />
        </div>
    );
}