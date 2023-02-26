import { useRoutes } from 'react-router'

import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Overview from './pages/Overview'
import NewUsers from './pages/NewUsers'
import Sales from './pages/Sales'
import UserDetails from './pages/UserDetails'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
    name: 'Dashboard',
    children: [
      { path: '/', element: <Overview />, name: 'Overview' },
      {
        path: '/new-users',
        element: <NewUsers />,
        name: 'New Users',
        children: [{ path: ':id', element: <UserDetails />, name: 'User Details' }],
      },
      { path: '/sales', element: <Sales />, name: 'Sales' },
    ],
  },
  { path: '/projects', element: <Projects />, name: 'Projects' },
  { path: '/team', element: <Team />, name: 'Team' },
]

const App = () => {
  const element = useRoutes(routes)

  return (
    <div className='flex p-10'>
      <Sidebar />

      <div>
        <Breadcrumb />

        {element}
      </div>
    </div>
  )
}

export default App
