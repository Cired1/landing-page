import styles from "./ProjectCard.module.css"

const ProjectCard = ({ title, desc }) => {
    return (
        <article className={styles.container}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    )
}

export default ProjectCard
