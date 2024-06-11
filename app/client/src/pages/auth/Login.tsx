import Button from '../../components/atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import styles from './styles.module.scss'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setLoggedUser } from '../../features/userConnectedSlice'
import { useLoginMutation } from '../../generated/graphql'

const Login = () => {
  const navigate = useNavigate()
  const [msgError, setMsgError] = useState('')
  const [login, { data, loading, error }] = useLoginMutation()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    try {
      if (!username || !password) {
        setMsgError('You need to complete all fields')
        return
      }

      const { data } = await login({
        variables: { input: { username, password } },
      })
      if (data?.login.token) {
        console.log(data)
        dispatch(setLoggedUser(data.login))
        navigate('/')
      }
    } catch (e) {
      console.error(e)
      setMsgError('An error occured')
    }
  }

  useEffect(() => {
    if (loading) return
    if (data) {
      console.log('Login successful:', data)
    }
    if (error) {
      console.error('Error:', error)

      setMsgError('An error occured')

      if (error.message === 'Unauthorized') {
        setMsgError('Bad username or password !')
      }
    }
  }, [data, loading, error])

  return (
    <AuthLayout>
      <div className={styles.auth__forms__box}>
        <h2 className={styles.auth__forms__title}>Sign in</h2>
        <div className={styles.auth__forms__content}>
          <form onSubmit={handleSubmit}>
            <div className={styles.auth__forms__content__input}>
              <label htmlFor="username">User name</label>
              <input
                ref={usernameRef}
                type="username"
                id="username"
                name="username"
                placeholder="username"
              />
            </div>
            <div className={styles.auth__forms__content__input}>
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            {msgError && (
              <p className={styles.auth__forms__error}>{msgError}</p>
            )}
            <div className={styles.auth__forms__infos}>
              <p>
                No account ?&nbsp;
                <Link to="/register">Sign-up</Link>
              </p>
            </div>
            <Button>LOGIN</Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
