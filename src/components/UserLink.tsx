import NavLink from './NavLink'
import { User } from '../types/types'

interface Props {
  user: User
}

const UserLink = ({ user }: Props) => {
  return (
    <li key={user.id}>
      <NavLink to={`${user.id}`} className='block mb-2'>
        {user.username}
      </NavLink>
    </li>
  )
}

export default UserLink
