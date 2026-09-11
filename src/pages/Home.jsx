import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Service";
import Process from "../components/Process/Process";
import Clients from "../components/Clients/Clients";
import FAQ from "../components/FAQ/FAQ";
import WhyUs from "../components/WhyUs/WhyUs";

function Home() {
    return (
        <>
            <Hero />

            <About />

            <Services />

            <Process />

            <Clients />

            <FAQ />

            <WhyUs />
        </>
    );
}

export default Home;