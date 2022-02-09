import styles from "./Logo.module.css"
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.image} />
            <h2 className={styles.title}>Example Net</h2>
        </div>
    )
}

export default Logo
