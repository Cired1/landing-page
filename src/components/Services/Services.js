import styles from "./Services.module.css"
import { services } from "../../data"
import ServiceCard from "../ServiceCard/ServiceCard"

const Services = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Services</h2>
                <h3 className={styles.subtitle}>We are deeply committed to the growth and success of our clients.</h3>
                <div className={styles.grid}>
                    {services.map((service) =>
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            img={service.image}
                            desc={service.description}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
