import NavLink from './NavLink'
import { NavItem as NavItemType } from '../types/types'

interface Props {
  navItem: NavItemType
}

const NavItem = ({ navItem }: Props) => {
  return (
    <li key={navItem.name}>
      <NavLink
        to={navItem.path}
        className='block mb-2'
        inactiveClassName='text-gray-400'
        activeClassName='text-gray-900'
      >
        {navItem.name}
      </NavLink>
    </li>
  )
}

export default NavItem