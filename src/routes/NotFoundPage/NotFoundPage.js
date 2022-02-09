import { useEffect } from "react";
import { Link } from "react-router-dom"
import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    
    useEffect(() => {
        document.title = "Example Net | Page not found"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2>Error 404</h2>
                <h3>Page Not Found</h3>
                <Link to="/" className={styles.link}>Go back home</Link>
            </div>
        </section>
    )
}

export default NotFoundPage
