import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export default function ContactUs() {
    const { t } = useTranslation();

    // قائمة روابط التواصل الاجتماعي
    const socialLinks = [
        { name: "Facebook", url: "https://facebook.com", icon: "fa-brands fa-facebook-f", class: "facebook" },
        { name: "Instagram", url: "https://instagram.com", icon: "fa-brands fa-instagram", class: "instagram" },
        { name: "TikTok", url: "https://tiktok.com", icon: "fa-brands fa-tiktok", class: "tiktok" },
        { name: "WhatsApp", url: "https://wa.me/201040376921", icon: "fa-brands fa-whatsapp", class: "whatsapp" },
        { name: "YouTube", url: "https://youtube.com", icon: "fa-brands fa-youtube", class: "youtube" }
    ];

    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ type: "", text: "" });

        // المفاتيح الخاصه بـ EmailJS
        const SERVICE_ID = "service_dih9sol"; 
        const TEMPLATE_ID = "template_53ec2pd"; 
        const PUBLIC_KEY = "U23SzaA7mC7dAla0V";   

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                service: formData.service,
                message: formData.message,
                to_email: "alahed.multipleactivities@gmail.com"
            },
            PUBLIC_KEY
        )
        .then(() => {
            setLoading(false);
            setStatusMessage({
                type: "success",
                text: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا."
            });
            setFormData(initialFormData); // إعادة تعيين البيانات
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            setLoading(false);
            setStatusMessage({
                type: "danger",
                text: "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى."
            });
        });
    };

    return (
        <section className="contact-section py-5">
            <div className="container">
                <div className="row g-4">
                    {/* 1. بطاقات ومعلومات الاتصال */}
                    <div className="col-lg-4">
                        <div className="contact-info-card p-4 rounded-3 h-100 d-flex flex-column">
                            <div>
                                <h3 className="mb-4">{t("contactPage.info.title")}</h3>
                                
                                {/* رقم الهاتف */}
                                <div className="info-item d-flex align-items-center mb-4">
                                    <div className="info-icon me-3">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted small">{t("contactPage.info.phone")}</span>
                                        <a href="tel:+201040376921" className="mb-0 fw-bold text-decoration-none text-reset" dir="ltr">
                                            +20 1040376921
                                        </a>
                                    </div>
                                </div>

                                {/* البريد الإلكتروني */}
                                <div className="info-item d-flex align-items-center mb-4">
                                    <div className="info-icon me-3">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted small">{t("contactPage.info.email")}</span>
                                        <a href="mailto:alahed.multipleactivities@gmail.com" className="mb-0 fw-bold text-decoration-none text-reset text-break">
                                            alahed.multipleactivities@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* العنوان */}
                                <div className="info-item d-flex align-items-start mb-4">
                                    <div className="info-icon me-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted small">{t("contactPage.info.address")}</span>
                                        <p className="mb-0 fw-bold">{t("contactPage.info.addressText")}</p>
                                    </div>
                                </div>

                                {/* ساعات العمل */}
                                <div className="info-item d-flex align-items-center">
                                    <div className="info-icon me-3">
                                        <i className="fa-solid fa-clock"></i>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted small">{t("contactPage.info.workingHours")}</span>
                                        <p className="mb-0 fw-bold">{t("contactPage.info.hoursText")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* أزرار التواصل الاجتماعي */}
                            <div className="social-links-wrapper">
                                <div className="social-icons-list d-flex align-items-center gap-2 flex-wrap">
                                    {socialLinks.map((item, index) => (
                                        <a 
                                            key={index}
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`social-btn ${item.class}`} 
                                            title={item.name}
                                            aria-label={item.name}
                                        >
                                            <i className={item.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. نموذج أرسل رسالتك */}
                    <div className="col-lg-8">
                        <div className="contact-form-card p-4 p-md-5 rounded-3 border">
                            <h3 className="mb-4">{t("contactPage.form.title")}</h3>

                            {/* رسالة نجاح أو فشل الإرسال */}
                            {statusMessage.text && (
                                <div className={`alert alert-${statusMessage.type} mb-4`} role="alert">
                                    {statusMessage.text}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">{t("contactPage.form.nameLabel")}</label>
                                        <input 
                                            id="name"
                                            type="text" 
                                            name="name"
                                            className="form-control" 
                                            placeholder={t("contactPage.form.namePlaceholder")}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">{t("contactPage.form.emailLabel")}</label>
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            className="form-control" 
                                            placeholder={t("contactPage.form.emailPlaceholder")}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">{t("contactPage.form.phoneLabel")}</label>
                                        <input 
                                            id="phone"
                                            type="tel" 
                                            name="phone"
                                            className="form-control" 
                                            placeholder={t("contactPage.form.phonePlaceholder")}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="service" className="form-label">{t("contactPage.form.serviceLabel")}</label>
                                        <select 
                                            id="service"
                                            name="service" 
                                            className="form-select"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">{t("contactPage.form.serviceSelect")}</option>
                                            <option value="ads">{t("contactPage.form.services.ads")}</option>
                                            <option value="social">{t("contactPage.form.services.social")}</option>
                                            <option value="content">{t("contactPage.form.services.content")}</option>
                                            <option value="branding">{t("contactPage.form.services.branding")}</option>
                                            <option value="dev">{t("contactPage.form.services.dev")}</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">{t("contactPage.form.messageLabel")}</label>
                                        <textarea 
                                            id="message"
                                            name="message" 
                                            rows="5" 
                                            className="form-control" 
                                            placeholder={t("contactPage.form.messagePlaceholder")}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary submit-btn px-4 py-2"
                                            disabled={loading}
                                        >
                                            {loading ? "جاري الإرسال..." : t("contactPage.form.submitBtn")}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* 3. قسم الخريطة */}
                    <div className="col-12 mt-5">
                        <div className="map-card p-4 rounded-3 border bg-white shadow-sm">
                            <h3 className="mb-2 text-center fw-bold">
                                {t("contactPage.mapTitle")}
                            </h3>
                            
                            <div className="text-center mb-4">
                                <p className="text-muted mb-0 d-inline-flex align-items-center gap-2 fs-6">
                                    <i className="fa-solid fa-location-dot text-danger"></i>
                                    <span>{t("contactPage.info.addressText")}</span>
                                </p>
                            </div>

                            {/* 3. الخريطة */}
                            <div className="map-container rounded-3 overflow-hidden" style={{ height: "450px", width: "100%" }}>
                                <iframe
                                    title="Google Map Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d748.53925436781!2d31.252067282419258!3d29.622727897261633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1788619024980!5m2!1sar!2seg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}