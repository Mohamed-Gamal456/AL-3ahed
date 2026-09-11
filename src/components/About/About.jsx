import { useTranslation } from "react-i18next";
import imgAbout from "../../assets/images/Image-hero.png"
import "./About.css";

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">

            <div className="container">

                <div className="row align-items-center">

                    {/* =========================
                        About Content
                    ========================== */}
                    <div className="col-lg-7">

                        <div className="about-content">

                            {/* Title */}
                            <h2>
                                {t("About.Title")}
                            </h2>


                            {/* Description */}
                            <p className="about-description">
                                {t("About.Description")}
                            </p>


                            {/* Points */}
                            <ul className="about-points">

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>
                                        {t("About.Points.point1")}
                                    </span>
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>
                                        {t("About.Points.point2")}
                                    </span>
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>
                                        {t("About.Points.point3")}
                                    </span>
                                </li>
                            </ul>


                            {/* Closing Paragraph */}
                            <p className="about-closing">
                                {t("About.Closing_paragraph")}
                            </p>

                        </div>

                    </div>
                    
                    {/* =========================
                        About Image
                    ========================== */}
                    <div className="col-lg-5">

                        <div className="about-image">
                            <img
                                src={imgAbout}
                                alt="AL-3HED Marketing Agency"
                            />
                        </div>

                    </div>
                </div>
            {/* Marketing & Alaahed Tools */}
                <div className="footer-about text-center">

                    <div className="description">
                        <h2 className="tools-title">
                            {t("About.Marketing_tools")}
                        </h2>
                        <p className="tools-description">
                            {t("About.Marketing_tools_description")}
                        </p>
                    </div>

                    <div className="tools-marquee">

                        {/* Row 1 */}
                        <div className="tools-track tools-track-left">

                            <div className="tool-item">
                                <i className="fa-brands fa-meta"></i>
                                <span>Meta Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-google"></i>
                                <span>Google Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-tiktok"></i>
                                <span>TikTok Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-instagram"></i>
                                <span>Instagram</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-facebook"></i>
                                <span>Facebook</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-youtube"></i>
                                <span>YouTube</span>
                            </div>


                            {/* Duplicate */}

                            <div className="tool-item">
                                <i className="fa-brands fa-meta"></i>
                                <span>Meta Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-google"></i>
                                <span>Google Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-tiktok"></i>
                                <span>TikTok Ads</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-instagram"></i>
                                <span>Instagram</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-facebook"></i>
                                <span>Facebook</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-brands fa-youtube"></i>
                                <span>YouTube</span>
                            </div>

                        </div>


                        {/* Row 2 */}
                        <div className="tools-track tools-track-right">

                            <div className="tool-item">
                                <i className="fa-solid fa-palette"></i>
                                <span>Canva</span>
                            </div>

                            <div className="tool-item">
                                <i class="fa-solid fa-photo-film"></i>
                                <span>Photoshop</span>
                            </div>

                            <div className="tool-item">
                                <i class="fa-solid fa-stamp"></i>
                                <span>Illustrator</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-video"></i>
                                <span>CapCut</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-chart-line"></i>
                                <span>Google Analytics</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                                <span>Search Console</span>
                            </div>


                            {/* Duplicate */}

                            <div className="tool-item">
                                <i className="fa-solid fa-palette"></i>
                                <span>Canva</span>
                            </div>

                            <div className="tool-item">
                                <i class="fa-solid fa-photo-film"></i>
                                <span>Photoshop</span>
                            </div>

                            <div className="tool-item">
                                <i class="fa-solid fa-stamp"></i>
                                <span>Illustrator</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-video"></i>
                                <span>CapCut</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-chart-line"></i>
                                <span>Google Analytics</span>
                            </div>

                            <div className="tool-item">
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                                <span>Search Console</span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}