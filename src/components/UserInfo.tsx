interface Props {
  label: string
  value: string
}

const UserInfo = ({ label, value = '' }: Props) => {
  return (
    <div className='flex'>
      <p className='mr-2'>{`${label}:`}</p>
      <p className='mb-2'>{value}</p>
    </div>
  )
}

export default UserInfo
