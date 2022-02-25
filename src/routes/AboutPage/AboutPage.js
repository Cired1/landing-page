import { useEffect } from "react";
import styles from "./AboutPage.module.css";
import missionImage from "../../assets/mission.jpg";

const AboutPage = () => {

    useEffect(() => {
        document.title = "Example Net | About Us"
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Meet the minds behind Example Net
                </h2>
                <p className={styles.desc}>
                    Learn what defines us as a team, as a company, and check open positions if you want to be one of us!
                </p>
                <div className={styles.mission}>
                    <div className={styles.missionLeft}>
                        <h3 className={styles.missionTitle}>Our mission</h3>
                        <p className={styles.missionDesc}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                        </p>
                    </div>
                    <img 
                        className={styles.image} 
                        src={missionImage} 
                        alt="mission" 
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutPage
