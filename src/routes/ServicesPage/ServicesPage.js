import { useEffect } from "react";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {

    useEffect(() => {
        document.title = "Example Net | Services"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>More about our services</h2>
                <h3 className={styles.subtitle}>Digital Products</h3>
                <section className={styles.grid}>
                    <div className={styles.item}>
                        <h4>Service 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Service 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Service 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Service 4</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ServicesPage
