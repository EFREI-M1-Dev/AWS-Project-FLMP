import Button from '../../components/atoms/Button'
import styles from './styles.module.scss'

type AuthLayoutProps = {
  children: React.ReactElement | React.ReactElement[]
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__infos}>
        <h1 className={styles.auth__infos__title}>Welcome on our website!</h1>
        <p className={styles.auth__infos__description}>
          You need to sign-in or sign-up in order to access rest of the website.
        </p>
        <p className={styles.auth__infos__help}>
          A issue? Need help? Contact us!
        </p>
        <Button>Support</Button>
      </div>
      <div className={styles.auth__forms}>{children}</div>
    </div>
  )
}

export default AuthLayout
