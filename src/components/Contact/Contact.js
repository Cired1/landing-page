import { Link } from "react-router-dom"
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        Are you ready to scale your business?
                    </h2>
                    <h3 className={styles.subtitle}>
                        Get in touch and let us build something amazing together!
                    </h3>
                </div>
                <Link to="/contact" className={styles.link}>
                    Contact Us
                </Link>
            </div>
        </section>
    )
}

export default Contact
