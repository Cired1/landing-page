import { Logo } from ".."
import styles from "./CompanyCard.module.css"

const CompanyCard = () => {
    return (
        <article className={styles.container}>
            <Logo />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
    )
}

export default CompanyCard
