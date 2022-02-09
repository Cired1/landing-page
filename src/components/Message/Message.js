import styles from "./Message.module.css"

const Message = () => {
    return (
        <section className={styles.container} id="contact">
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        Are you ready to scale your business?
                    </h2>
                    <h3 className={styles.subtitle}>
                        Get in touch and let us build something amazing together!
                    </h3>
                </div>
                <a href="#contact" className={styles.link}>
                    Contact Us
                </a>
            </div>
        </section>
    )
}

export default Message
