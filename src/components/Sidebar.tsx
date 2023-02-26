import NavItem from './NavItem'

const navLinks = [
  { name: 'Dashboard', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
]

const Sidebar = () => {
  return (
    <nav className='w-72 bg-white'>
      <ul>
        {navLinks.map((navLink) => (
          <NavItem key={navLink.name} navItem={navLink} />
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
