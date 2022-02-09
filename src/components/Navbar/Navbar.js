import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logoImage} />
                    <h1 className={styles.logoTitle}>Example Net</h1>
                </div>

                <button className={styles.btnMenu}>
                    <FaBars />
                </button>

                <ul className={styles.list}>
                    <li>
                        <a href="#hero" className={styles.link}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={styles.link}>About Us</a>
                    </li>
                    <li>
                        <a href="#services" className={styles.link}>Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className={styles.link}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.btnContact}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
