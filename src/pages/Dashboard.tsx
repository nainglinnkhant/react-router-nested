import { Outlet } from 'react-router'

import Tabs from '../components/Tabs'

const Dashboard = () => {
  return (
    <>
      <Tabs />

      <div className='mt-5 ml-2'>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
