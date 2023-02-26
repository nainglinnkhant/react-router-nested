import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { User } from '../types/types'

const fetchUser = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.json()
}

const UserDetails = () => {
  const params = useParams()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userId = params.id || ''

    setLoading(true)
    fetchUser(userId).then((user) => {
      setUser(user)
      setLoading(false)
    })
  }, [params.id])

  if (loading) return <p>Loading...</p>

  if (!user?.name) return <p>User not found!</p>

  return (
    <div>
      <div className='flex'>
        <p className='mr-2'>Name:</p>
        <p className='mb-2'>{user?.name}</p>
      </div>

      <div className='flex'>
        <p className='mr-2'>Email:</p>
        <p className='mb-2'>{user?.email}</p>
      </div>

      <div className='flex'>
        <p className='mr-2'>Phone:</p>
        <p className='mb-2'>{user?.phone}</p>
      </div>

      <div className='flex'>
        <p className='mr-2'>Website:</p>
        <p className='mb-2'>{user?.website}</p>
      </div>
    </div>
  )
}

export default UserDetails
