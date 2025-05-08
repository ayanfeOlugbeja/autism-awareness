import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/admin/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/posts', label: 'Posts', icon: '📝' },
    { path: '/admin/events', label: 'Events', icon: '📅' },
    { path: '/admin/newsletters', label: 'Newsletters', icon: '📧' },
    { path: '/admin/partners', label: 'Partners', icon: '🤝' },
    { path: '/admin/volunteers', label: 'Volunteers', icon: '👥' },
    { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className='p-4'>
          <div className='flex items-center justify-between mb-8'>
            {isSidebarOpen && (
              <h1 className='text-xl font-bold text-gray-800'>Admin Panel</h1>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className='p-2 rounded-lg hover:bg-gray-100'
            >
              {isSidebarOpen ? '←' : '→'}
            </button>
          </div>

          <nav className='space-y-2'>
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <span className='text-xl mr-3'>{item.icon}</span>
                {isSidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className='absolute bottom-0 w-full p-4 border-t'>
          <button
            onClick={handleLogout}
            className='w-full flex items-center p-3 rounded-lg text-red-600 hover:bg-red-50'
          >
            <span className='text-xl mr-3'>🚪</span>
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <div className='p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
