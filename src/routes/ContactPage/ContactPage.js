import { useEffect } from "react"
import styles from "./ContactPage.module.css"

const ContactPage = () => {

    useEffect(() => {
        document.title = "Example Net | Contact"
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Need help?</h2>
                    <p className={styles.desc}>Fill up the form and our team will get back to you within 24 hours</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea rows="8" cols="50" placeholder="Message"></textarea>
                    <button className={styles.btn}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage
