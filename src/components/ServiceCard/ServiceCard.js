import styles from "./ServiceCard.module.css"

const ServiceCard = ({ img, title, desc }) => {
    return (
        <article className={styles.container}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    )
}

export default ServiceCard
