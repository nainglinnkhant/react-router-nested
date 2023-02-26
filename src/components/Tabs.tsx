import TabItem from './TabItem'
import { TabItem as TabItemType } from '../types/types'

interface Props {
  tabs: TabItemType[]
}

const Tabs = ({ tabs }: Props) => {
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
