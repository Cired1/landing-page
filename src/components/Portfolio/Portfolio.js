import styles from "./Portfolio.module.css"
import { projects } from "../../data"
import ProjectCard from "../ProjectCard/ProjectCard"

const Portfolio = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>PORTFOLIO</h2>
                <div className={styles.grid}>
                    {projects.map((project) =>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            desc={project.description}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio
