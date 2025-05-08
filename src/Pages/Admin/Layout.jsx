import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container } from '../../components/layout'
import { Heading } from '../../components/typography'

const AdminLayout = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/posts', label: 'Blog Posts', icon: '📝' },
    { path: '/admin/events', label: 'Events', icon: '📅' },
    { path: '/admin/newsletters', label: 'Newsletters', icon: '📧' },
    { path: '/admin/partners', label: 'Partners', icon: '🤝' },
    { path: '/admin/volunteers', label: 'Volunteers', icon: '👥' },
    { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside className='fixed inset-y-0 left-0 w-64 bg-white shadow-lg'>
        <div className='p-6'>
          <Heading className='text-2xl mb-8'>Admin Panel</Heading>
          <nav className='space-y-2'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className='text-xl'>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className='ml-64 p-8'>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
