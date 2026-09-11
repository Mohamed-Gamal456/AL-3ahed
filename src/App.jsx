import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../src/components/layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

function App() {

    const { i18n } = useTranslation();

    useEffect(() => {

        const isArabic = i18n.language.startsWith("ar");

        document.documentElement.dir = isArabic ? "rtl" : "ltr";
        document.documentElement.lang = isArabic ? "ar" : "en";

    }, [i18n.language]);


    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/:slug" element={<ServiceDetailsPage />} />
                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;