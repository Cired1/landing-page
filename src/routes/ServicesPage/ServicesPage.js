import { useEffect } from "react";
import styles from "./ServicesPage.module.css";
import { Services } from "../../components"

const ServicesPage = () => {

    useEffect(() => {
        document.title = "Example Net | Services"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>More about our services</h2>
                <h3 className={styles.subtitle}>Digital Products</h3>
                <Services />
            </div>
        </section>
    )
}

export default ServicesPage
