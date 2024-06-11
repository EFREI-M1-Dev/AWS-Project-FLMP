import { Navigate } from 'react-router-dom'

/* hooks */
import { useAppSelector } from '../../hooks/reduxHooks'

type RedirectIfNotLoggedProps = {
  children: React.ReactElement
}

const RedirectIfNotLogged = ({ children }: RedirectIfNotLoggedProps) => {
  const token = useAppSelector((state) => state?.user?.token)
  return token ? <Navigate to="/" /> : children
}

export default RedirectIfNotLogged
