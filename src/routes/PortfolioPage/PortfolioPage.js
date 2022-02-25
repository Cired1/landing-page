import { useEffect } from "react"
import styles from "./PortfolioPage.module.css"
import portfolioImage from "../../assets/portfolio.jpg";
import { Link } from "react-router-dom";

const PortfolioPage = () => {

    useEffect(() => {
        document.title = "Example Net | Portfolio"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Around 20 projects 7 countries 2 years
                </h2>
                <img src={portfolioImage} alt="portfolio" className={styles.image} />
                <div className={styles.info}>
                    <h5>About Example Net</h5>
                    <h3>We can build new digital products from the ground up, or upgrade existing ones to cope with new demands and growing our base.</h3>
                    <p>Example Net is a team of experts who can take any challenge in the sphere of web and mobile development.</p>
                    <p>We create digital experiences that are human-centered and future proof.</p>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>
                        Have a project in mind? Let´s get to work.
                    </h3>
                    <Link to="/contact" className={styles.btnContact} >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage
