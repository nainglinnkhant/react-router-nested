import { Outlet } from 'react-router'

import Tabs from '../components/Tabs'

const tabs = [
  { name: 'Overview', path: '/' },
  { name: 'New Users', path: '/new-users' },
  { name: 'Sales', path: '/sales' },
]

const Dashboard = () => {
  return (
    <>
      <Tabs tabs={tabs} />

      <div className='mt-5 ml-2'>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
