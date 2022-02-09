import { useEffect } from "react";
import styles from "./AboutPage.module.css"
import Construction from "../../components/Construction/Construction";

const AboutPage = () => {

    useEffect(() => {
        document.title = "Example Net | About Us"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Construction />
            </div>
        </section>
    )
}

export default AboutPage
