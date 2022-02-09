import styles from "./Home.module.css";
import {Hero, About, Services, Clients, Portfolio, Message} from "../../components"

const Home = () => {
    return (
        <section className={styles.container}>
            <Hero />
            <About />
            <Services />
            <Clients />
            <Portfolio />
            <Message />
        </section>
    )
}

export default Home
