import { useEffect } from "react";
import styles from "./ServicesPage.module.css";
import Construction from "../../components/Construction/Construction";

const ServicesPage = () => {

    useEffect(() => {
        document.title = "Example Net | Services"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Construction />
            </div>
        </section>
    )
}

export default ServicesPage
