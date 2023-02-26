import { Link, LinkProps, matchRoutes, useLocation } from 'react-router-dom'

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
}: Props) => {
  const location = useLocation()
  const matchedRoutes = matchRoutes(routes, location)

  let isActive
  if (exact) {
    isActive = location.pathname === to
  } else {
    isActive = matchedRoutes?.some((route) => route.pathname === to)
  }

  const allClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`

  return (
    <Link to={to} className={allClassName}>
      {children}
    </Link>
  )
}

export default NavLink
