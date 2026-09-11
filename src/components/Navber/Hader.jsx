import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import logo from '../../assets/images/logo-main.png';
import './Hader.css';

export default function Hader() {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language.startsWith("ar") ? "en" : "ar";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <header className="navbar">
            <div className="container">

                {/* Logo */}
                <Link to="/" className="logo-link">
                    <img
                        src={logo}
                        alt="ALaahed Logo"
                        className="logo"
                    />
                </Link>

                {/* Navigation */}
                <nav className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav navbar-links">

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/"
                            >
                                {t("Header.home")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/about"
                            >
                                {t("Header.about")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/services"
                            >
                                {t("Header.services")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/contact"
                            >
                                {t("Header.contact")}
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                {/* Contact */}
                <div className="connect">
                    <ul className="d-flex align-items-center">

                        <li className="itme-connect whatsApp">
                            <a
                                href="https://wa.me/201040376921"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>

                        <li className="itme-connect email">
                            <a href="mailto:alahed.multipleactivities@gmail.com">
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                        </li>

                        <li className="itme-connect language">
                            <button onClick={changeLanguage}>
                                {i18n.language.startsWith("ar") ? "EN" : "AR"}
                            </button>
                        </li>

                    </ul>
                </div>

                {/* Mobile Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </header>
    );
}