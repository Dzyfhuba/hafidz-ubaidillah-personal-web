import styles from './badge.module.css'

const Badge = () => {
  return (
    <span className={styles.badge}>
      {process.env.NEXT_PUBLIC_BADGE}
    </span>
  )
}

export default Badge