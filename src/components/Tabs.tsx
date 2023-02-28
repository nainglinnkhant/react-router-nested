import TabItem from './TabItem'

const tabs = [
  { name: 'Overview', path: '' },
  { name: 'New Users', path: 'new-users' },
  { name: 'Sales', path: 'sales' },
]

const Tabs = () => {
  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <TabItem key={tab.name} tab={tab} />
        ))}
      </ul>
    </nav>
  )
}

export default Tabs
