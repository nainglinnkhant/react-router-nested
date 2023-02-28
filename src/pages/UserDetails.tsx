import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import UserInfo from '../components/UserInfo'
import type { User } from '../types/types'

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
      <UserInfo label='Name' value={user.name} />
      <UserInfo label='Email' value={user.email} />
      <UserInfo label='Phone' value={user.phone} />
      <UserInfo label='Website' value={user.website} />
    </div>
  )
}

export default UserDetails
