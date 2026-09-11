import { Outlet } from "react-router-dom";

import Navbar from "../Navber/Hader";
import Footer from "../Footer/Footer";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;