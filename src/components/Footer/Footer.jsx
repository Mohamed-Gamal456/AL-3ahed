import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language.startsWith("ar");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lng;
    };

    return (
        <footer className="al3-footer">
            <div className="container">
                <div className="al3-footer-grid">
                    {/* 1. About Section */}
                    <div className="al3-footer-col">
                        <h3>{t("Footer.AboutTitle")}</h3>
                        <p>{t("Footer.AboutText")}</p>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="al3-footer-col">
                        <h3>{t("Footer.LinksTitle")}</h3>

                        <ul className="al3-footer-links">

                            <li>
                                <Link to="/">
                                    {t("Footer.Links.home")}
                                </Link>
                            </li>

                            <li>
                                <Link to="/about">
                                    {t("Footer.Links.about")}
                                </Link>
                            </li>

                            <li>
                                <Link to="/services">
                                    {t("Footer.Links.services")}
                                </Link>
                            </li>

                            <li>
                                <Link to="/#process">
                                    {t("Footer.Links.process")}
                                </Link>
                            </li>

                            <li>
                                <Link to="/#faq">
                                    {t("Footer.Links.faq")}
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    {t("Footer.Links.contact")}
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="al3-footer-col">
                        <h3>{t("Footer.ContactTitle")}</h3>
                        <div className="al3-footer-info">
                            {/* الاتصال الهاتفي الأول */}
                            <p>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+201040376921" dir="ltr" className="al3-contact-link">
                                    +20 1040376921
                                </a>
                            </p>

                            {/* الرقم الثاني فتح الواتساب مباشرة */}
                            <p>
                                <i className="fa-brands fa-whatsapp"></i>
                                <a 
                                    href="https://wa.me/201030369897" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    dir="ltr" 
                                    className="al3-contact-link"
                                >
                                    +20 1030369897
                                </a>
                            </p>

                            {/* البريد الإلكتروني */}
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:alahed.multipleactivities@gmail.com" target="_blank"  className="al3-contact-link">
                                    alahed.multipleactivities@gmail.com
                                </a>
                            </p>

                            {/* العنوان يفتح خرائط جوجل */}
                            <p>
                                <i className="fa-solid fa-location-dot"></i>
                                <a 
                                    href="https://maps.google.com/?q=29.6214412,31.2547927" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="al3-contact-link"
                                >
                                    الجيزة - العياط - الطريق السريع امام معرض الدهشوري بعد شارع ابوهشيمه
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* 4. Social & CTA */}
                    <div className="al3-footer-col">
                        <h3>{t("Footer.FollowTitle")}</h3>
                        <p className="al3-social-text">{t("Footer.FollowText")}</p>
                        
                        <div className="al3-footer-socials">
                            <a href="#" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" aria-label="TikTok">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>

                            <a
                                href="https://wa.me/201030369897"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>

                        <Link to="/contact" className="al3-footer-cta-btn">
                            {t("Footer.StartButton")}
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="al3-footer-bottom">
                    <p>{t("Footer.Copyright")}</p>

                    {/* Language Switcher */}
                    <div className="al3-lang-switcher">
                        <button
                            className={isArabic ? "active" : ""}
                            onClick={() => changeLanguage("ar")}
                        >
                            العربية 🇪🇬
                        </button>
                        <button
                            className={!isArabic ? "active" : ""}
                            onClick={() => changeLanguage("en")}
                        >
                            English 🇬🇧
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}