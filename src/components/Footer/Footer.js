import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import logo from "../../assets/logo.png"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <article className={styles.company}>
                        <img src={logo} alt="logo" className={styles.logoImage} />
                        <h2>Example Net</h2>
                        <p>EXAMPLE NET is a team of experienced mobile and web developers.</p>
                    </article>

                    <section className={styles.companyInfo}>
                        <div className={styles.companyInfoItem}>
                            <h3 className={styles.companyInfoTitle}>Links</h3>
                            <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Services
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div className={styles.companyInfoItem}>
                            <h3 className={styles.companyInfoTitle}>Our Services</h3>
                            <ul>
                                <li>IT Consulting</li>
                                <li>Workplace Education</li>
                                <li>E-Commerce</li>
                            </ul>
                        </div>
                        <div className={styles.companyInfoItem}>
                            <h3 className={styles.companyInfoTitle}>Social Media Links</h3>
                            <ul>
                                <li>Follow Us On Social Media</li>
                                <li>
                                    <div className={styles.socialLinks}>
                                        <FaFacebook className={styles.link} />
                                        <FaTwitter className={styles.link} />
                                        <FaInstagram className={styles.link} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                </div>

                <p className={styles.copyright}>Copyright © 2022 Example Net. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
