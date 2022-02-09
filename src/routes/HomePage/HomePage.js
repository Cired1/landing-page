import styles from "./HomePage.module.css";
import { Hero, About, Services, Clients, Portfolio, Contact } from "../../components"
import { useEffect } from "react";

const HomePage = () => {

    useEffect(() => {
        document.title = "Example Net | Home"
    }, []);

    return (
        <section className={styles.container}>
            <Hero />
            <About />
            <Services />
            <Clients />
            <Portfolio />
            <Contact />
        </section>
    )
}

export default HomePage
