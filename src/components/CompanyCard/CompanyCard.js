import { Logo } from ".."
import styles from "./CompanyCard.module.css"

const CompanyCard = () => {
    return (
        <article className={styles.container}>
            <Logo />
            <p>EXAMPLE NET is a team of experienced mobile and web developers.</p>
        </article>
    )
}

export default CompanyCard
