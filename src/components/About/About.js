import styles from "./About.module.css"
import aboutImage from "../../assets/aboutImage.png"

const About = () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.title}>We're a local GTA IT consulting company that will guide you to your success</h2>
                    <h3 className={styles.subtitle}>Our team is well vast in software development and is ready to develop the applications of your choice.</h3>
                </div>
                <img src={aboutImage} alt="about" className={styles.image} />
            </div>
        </section>
    )
}

export default About
