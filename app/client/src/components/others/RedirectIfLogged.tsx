import { Navigate } from 'react-router-dom'

/* hooks */
import { useAppSelector } from '../../hooks/reduxHooks'

type RedirectIfLoggedProps = {
  children: React.ReactElement
}

const RedirectIfLogged = ({ children }: RedirectIfLoggedProps) => {
  const token = useAppSelector((state) => state?.user?.token)

  return !token ? <Navigate to="/" /> : children
}

export default RedirectIfLogged
