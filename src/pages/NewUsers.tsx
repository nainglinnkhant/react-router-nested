import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

import UserLink from '../components/UserLink'
import { User } from '../types/types'

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

const NewUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className='flex'>
      <ul className='w-64'>
        {users.map((user) => (
          <UserLink key={user.id} user={user} />
        ))}
      </ul>

      <Outlet />
    </div>
  )
}

export default NewUsers
