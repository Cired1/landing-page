import { useEffect } from "react"
import Construction from "../../components/Construction/Construction";
import styles from "./PortfolioPage.module.css"

const PortfolioPage = () => {

    useEffect(() => {
        document.title = "Example Net | Portfolio"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Construction />
            </div>
        </section>
    )
}

export default PortfolioPage
