import { useEffect } from "react"
import Construction from "../../components/Construction/Construction";
import styles from "./ContactPage.module.css"

const ContactPage = () => {

    useEffect(() => {
        document.title = "Example Net | Contact"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Construction />
            </div>
        </section>
    )
}

export default ContactPage
