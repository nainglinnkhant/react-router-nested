export interface NavItem {
  name: string
  path: string
}

export interface TabItem extends NavItem {}

export interface User {
  id: number
  username: string
  name: string
  email: string
  phone: string
  website: string
}
