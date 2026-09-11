import { useTranslation } from "react-i18next";
import "./Clients.css";

import logo1 from "../../assets/images/clients/logo1.jpeg";
import logo2 from "../../assets/images/clients/logo2.jpeg";
import logo3 from "../../assets/images/clients/logo3.jpg";
import logo4 from "../../assets/images/clients/logo4.png";
import logo5 from "../../assets/images/clients/logo5.png";
import logo6 from "../../assets/images/clients/logo6.png";
import logo7 from "../../assets/images/clients/logo7.png";
import logo8 from "../../assets/images/clients/logo8.png";
import logo9 from "../../assets/images/clients/logo9.png";
import logo10 from "../../assets/images/Clients/logo10.png";

export default function Clients() {
    const { t } = useTranslation();

    const clients = [
        { id: 1, image: logo1, name: "Client 1" },
        { id: 2, image: logo2, name: "Client 2" },
        { id: 3, image: logo3, name: "Client 3" },
        { id: 4, image: logo4, name: "Client 4" },
        { id: 5, image: logo5, name: "Client 5" },
        { id: 6, image: logo6, name: "Client 6" },
        { id: 7, image: logo7, name: "Client 7" },
        { id: 8, image: logo8, name: "Client 8" },
        { id: 9, image: logo9, name: "Client 9" },
        { id: 10, image: logo10, name: "Client 10" },
    ];

    // تكرار اللوجوهات لعمل حركة لا نهائية
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="al3-clients" id="clients">

            <div className="container">

                {/* Header */}
                <div className="al3-clients-header">

                    <h2>
                        {t("Clients.Title")}
                    </h2>

                    <p>
                        {t("Clients.Description")}
                    </p>

                    <span className="al3-clients-line"></span>

                </div>
                {/* Logos Slider */}
                <div className="al3-clients-slider">

                    <div className="al3-clients-track">

                        {duplicatedClients.map((client, index) => (

                            <div
                                className="al3-client-card"
                                key={`${client.id}-${index}`}
                            >

                                <img
                                    src={client.image}
                                    alt={client.name}
                                />

                            </div>

                        ))}

                    </div>

                </div>
            </div>

        </section>
    );
}