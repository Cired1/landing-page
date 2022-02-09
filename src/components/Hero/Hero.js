import styles from "./Hero.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImage from "../../assets/heroImage.png"

const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.title}>We build digital solutions for your bussiness</h2>
                    <h3 className={styles.subtitle}>Example Net is a team of highly motivated and skilled developers who deliver best and scalable software for your business.</h3>
                    <a href="#contact" className={styles.link}>
                        Contact Us <AiOutlineArrowRight />
                    </a>
                </div>
                <img src={heroImage} alt="hero" className={styles.image} />
            </div>
        </section>
    )
}

export default Hero
