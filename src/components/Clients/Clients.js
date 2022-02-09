import styles from "./Clients.module.css"
import { clients } from "../../data"
import { Client } from ".."

const Clients = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Our Clients
                </h2>
                <div className={styles.grid}>
                    {clients.map((client) =>
                        <Client
                            key={client.id}
                            image={client.image}
                            name={client.name}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients
