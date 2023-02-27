import { Fragment } from 'react'
import { matchRoutes, useLocation } from 'react-router'

import { routes } from '../App'
import NavLink from './NavLink'

const Breadcrumb = () => {
  const location = useLocation()
  const matchedRoutes = matchRoutes(routes, location)

  const segments = matchedRoutes?.map((matchedRoute) => ({
    name: matchedRoute.route.name,
    pathname: matchedRoute.pathname,
  }))

  return (
    <div className='mb-5 text-gray-500'>
      <NavLink to='/' className='hover:text-teal-500'>
        Home
      </NavLink>

      {segments?.map((segment) => (
        <Fragment key={segment.name}>
          <span className='mx-4'>/</span>

          <NavLink to={segment.pathname} className='hover:text-teal-500'>
            {segment.name}
          </NavLink>
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb
