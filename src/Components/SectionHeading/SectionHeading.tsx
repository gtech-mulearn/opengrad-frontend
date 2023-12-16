import styles from './SectionHeading.module.css'

type Props = {
    title:string
}

export const SectionHeading = ({title}: Props) => {
  return (
    <h2 className={styles.heading}>{title}</h2>
  )
}