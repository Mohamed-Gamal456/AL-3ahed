import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ServiceHeader from "../components/ServiceHeader/ServiceHeader";
import ServiceOverview from "../components/ServiceOverview/ServiceOverview";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ServiceProjectsTemplate from "../components/ServiceProjectsTemplate/ServiceProjectsTemplate";

import ads from "../assets/images/services/Ads-Image1.jpg";
import content from "../assets/images/services/ContentCreation.jpg";
import mang from "../assets/images/services/SocialMediaManagement.jpg";
import design from "../assets/images/services/GRAPHICDESIGNING.jpg";
import market from "../assets/images/services/MarketingStrategy.jpg";
import video from "../assets/images/services/VideoProduction.jpg";

import paidAdsProjects from "../Data/services/paidAdsProjects";
import graphicDesignProjects from "../Data/services/graphicDesignProjects";
import videoProductionProjects from "../Data/services/videoProductionProjects";
import SocialMediaProjects from "../Data/services/socialMediaProjects";
import ContentCreationProjects from "../Data/services/contentCreationProjects";
import marketingStrategyProjects from "../Data/services/marketingStrategyProjects";

/*
    صور الخدمات الرئيسية
*/
const serviceImages = {
    "paid-ads": ads,
    "social-media": mang,
    "content-creation": content,
    "graphic-design": design,
    "video-production": video,
    "marketing-strategy": market,
};


/*
    مشاريع كل خدمة
*/
const serviceProjects = {
    "paid-ads": paidAdsProjects,
    "social-media": SocialMediaProjects,
    "content-creation": ContentCreationProjects,
    "graphic-design": graphicDesignProjects,
    "video-production": videoProductionProjects,
    "marketing-strategy": marketingStrategyProjects,
};


export default function ServiceDetailsPage() {
    const { slug } = useParams();
    const { t } = useTranslation();

    /*
        الخدمة الحالية
    */
    const currentKey = slug || "paid-ads";


    /*
        صورة الخدمة
    */
    const currentImage =
        serviceImages[currentKey] || ads;


    /*
        اسم الخدمة
    */
    const serviceTitle = t(
        `servicesData.${currentKey}.title`,
        currentKey
    );


    /*
        بيانات المشاريع من JSON
    */
    const currentServiceProjects = t(
        `services.${currentKey}`,
        {
            returnObjects: true,
        }
    );


    /*
        بيانات الصور والتصنيفات من JS
    */
    const currentProjects =
        serviceProjects[currentKey] || [];


    /*
        Debug
    */
    console.log("Current Service:", currentKey);

    console.log(
        "Projects Translation Data:",
        currentServiceProjects
    );

    console.log(
        "Projects Assets Data:",
        currentProjects
    );


    return (
        <main className="service-details-page">

            <ServiceHeader
                serviceName={serviceTitle}
            />

            <ServiceOverview
                serviceKey={currentKey}
                image={currentImage}
            />

            <WhyChooseUs
                serviceKey={currentKey}
            />

            <ServiceProjectsTemplate
                serviceData={currentServiceProjects}
                projectsData={currentProjects}
                variant={
                    currentKey === "graphic-design"
                        ? "graphic-design"
                        : currentKey === "video-production"
                        ? "video-production"
                        : currentKey === "social-media"
                        ? "social-media"
                        : currentKey === "content-creation"
                        ? "content-creation"
                        : currentKey === "marketing-strategy"
                        ? "marketing-strategy"
                        : "default"
                }
            />
        </main>
    );
}