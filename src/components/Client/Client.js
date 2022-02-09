import styles from "./Client.module.css"

const Client = ({ image, name }) => {
    return (
        <div>
            <img src={image} alt={name} className={styles.image} />
        </div>
    )
}

export default Client
