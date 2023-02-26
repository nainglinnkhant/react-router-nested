import {
  Link,
  LinkProps,
  matchRoutes,
  useLocation,
  useResolvedPath,
} from 'react-router-dom'

import { routes } from '../App'

interface Props extends LinkProps {
  activeClassName?: string
  inactiveClassName?: string
  exact?: boolean
}

const NavLink = ({
  children,
  to,
  className,
  activeClassName,
  inactiveClassName,
  exact,
  ...rest
}: Props) => {
  const location = useLocation()
  const matchedRoutes = matchRoutes(routes, location)
  const resolvedPath = useResolvedPath(to)

  let isActive
  if (exact) {
    isActive = location.pathname === resolvedPath.pathname
  } else {
    isActive = matchedRoutes?.some((route) => route.pathname === resolvedPath.pathname)
  }

  const allClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`

  return (
    <Link to={to} className={allClassName} {...rest}>
      {children}
    </Link>
  )
}

export default NavLink
