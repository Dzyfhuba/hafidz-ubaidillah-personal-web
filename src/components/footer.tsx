import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; 2023 <Link href='/'>Hafidz Ubaidillah</Link>
    </footer>
  )
}

export default Footer