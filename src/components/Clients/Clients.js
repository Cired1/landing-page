import styles from "./Clients.module.css"
import client1Image from "../../assets/client1Image.png"
import client2Image from "../../assets/client2Image.png"
import client3Image from "../../assets/client3Image.png"
import client4Image from "../../assets/client4Image.png"

const Clients = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Our Clients
                </h2>
                <div className={styles.grid}>
                    <div className={styles.client}>
                        <img src={client1Image} alt="client1" />
                    </div>
                    <div className={styles.client}>
                        <img src={client2Image} alt="client2" />
                    </div>
                    <div className={styles.client}>
                        <img src={client3Image} alt="client3" />
                    </div>
                    <div className={styles.client}>
                        <img src={client4Image} alt="client4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
