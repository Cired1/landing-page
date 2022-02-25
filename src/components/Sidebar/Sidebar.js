import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css"
import { Logo } from ".."
import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
    const { isOpen, closeSidebar } = useSidebarContext();

    return (
        <div className={styles.container}>
            <aside className={isOpen ? `${styles.sidebar} ${styles.show}` : `${styles.sidebar}`}>
                <div className={styles.header}>
                    <Logo />
                    <button className={styles.btnCloseSidebar} onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" onClick={closeSidebar}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about" onClick={closeSidebar}>
                            About Us
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/services" onClick={closeSidebar}>
                            Services
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/portfolio" onClick={closeSidebar}>
                            Portfolio
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact" onClick={closeSidebar}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
