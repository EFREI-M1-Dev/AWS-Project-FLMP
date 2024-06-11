import { FormEvent, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'

/* components */
import Button from '../../components/atoms/Button'
import AuthLayout from './AuthLayout'

import { useRegisterMutation } from '../../generated/graphql'

const Register = () => {
  const [signup, { data, loading, error }] = useRegisterMutation()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwdRef = useRef<HTMLInputElement>(null)
  const [msgError, setMsgError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const username = usernameRef.current?.value
    const password = passwdRef.current?.value

    try {
      if (!username || !password) {
        setMsgError('You need to complete all fields')
        return
      }

      const { data } = await signup({
        variables: { input: { username, password } },
      })
      if (data?.signup.username) {
        navigate('/login')
      } else {
        setMsgError("An error occured, please try again later")
      }
    } catch (e) {
      console.error(e)
      setMsgError('An error occured')
    }
  }

  useEffect(() => {
    if (loading) return
    if (data) {
      console.log('Signup successful:', data)
    }
    if (error) {
      console.error('Error:', error)
      setMsgError('An error occured')
    }
  }, [data, loading, error])

  return (
    <AuthLayout>
      <div className={styles.auth__forms__box}>
        <h2 className={styles.auth__forms__title}>Sign up</h2>
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
                ref={passwdRef}
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
              />
            </div>
            {msgError && (
              <p className={styles.auth__forms__error}>{msgError}</p>
            )}
            <div className={styles.auth__forms__infos}>
              <p>
                Already have an account ?&nbsp;
                <Link to="/login">Login</Link>
              </p>
            </div>
            <Button>Register</Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
