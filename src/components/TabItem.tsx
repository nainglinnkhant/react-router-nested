import NavLink from './NavLink'
import { TabItem as TabItemType } from '../types/types'

interface Props {
  tab: TabItemType
}

const TabItem = ({ tab }: Props) => {
  return (
    <li className='inline-block'>
      <NavLink
        to={tab.path}
        className='inline-block px-5 py-2 rounded-2xl mr-5 text-sm'
        inactiveClassName='bg-gray-100'
        activeClassName='bg-gray-300'
        exact={tab.name === 'Overview'}
      >
        {tab.name}
      </NavLink>
    </li>
  )
}

export default TabItem
