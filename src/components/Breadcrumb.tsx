import { matchRoutes, useLocation } from 'react-router'

import { routes } from '../App'

const Breadcrumb = () => {
  const location = useLocation()
  const matchedRoutes = matchRoutes(routes, location)

  const segments = matchedRoutes?.map((matchedRoute) => matchedRoute.route.name)

  return (
    <div className='mb-5 text-gray-500'>
      <span>Home</span>
      {segments?.map((segment) => (
        <span
          key={segment}
          className='ml-4 before:mr-4 before:content-["/"] before:inline-block'
        >
          {segment}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumb
