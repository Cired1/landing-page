import styles from "./Navbar.module.css"
/* import logo from "../../assets/logo.png" */
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import { useSidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
    const { openSidebar } = useSidebarContext();

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Logo />
                <button className={styles.btnMenu} onClick={openSidebar}>
                    <FaBars />
                </button>
                <ul className={styles.list}>
                    <li>
                        <Link to="/" className={styles.link} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.link} >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className={styles.link} >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={styles.link} >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.btnContact} >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
