import { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { HelmetProvider } from 'react-helmet-async'
import { auth } from './config/firebase'
import './index.css'

// Lazy load components
const Header = lazy(() => import('./Components/Header/index.jsx'))
const Footer = lazy(() => import('./Components/Footer/index.jsx'))

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Resources = lazy(() => import('./Pages/Resources'))
const GetInvolved = lazy(() => import('./Pages/GetInvolved'))
const Contact = lazy(() => import('./Pages/Contact'))
const Donate = lazy(() => import('./Pages/Donate'))
const News = lazy(() => import('./Pages/News'))
const Events = lazy(() => import('./Pages/Events'))
const Privacy = lazy(() => import('./Pages/Legal/Privacy'))
const Terms = lazy(() => import('./Pages/Legal/Terms'))
const NotFound = lazy(() => import('./Pages/NotFound'))

// Lazy load admin pages
const AdminLayout = lazy(() => import('./Pages/Admin/Layout'))
const AdminDashboard = lazy(() => import('./Pages/Admin'))
const AdminPosts = lazy(() => import('./Pages/Admin/Posts'))
const AdminEvents = lazy(() => import('./Pages/Admin/Events'))
const AdminNewsletters = lazy(() => import('./Pages/Admin/Newsletters'))
const AdminPartners = lazy(() => import('./Pages/Admin/Partners'))
const AdminVolunteers = lazy(() => import('./Pages/Admin/Volunteers'))
const AdminSettings = lazy(() => import('./Pages/Admin/Settings'))

// Lazy load auth pages
const Login = lazy(() => import('./Pages/Auth/Login'))

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className='flex flex-col min-h-screen'>
          {/* <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          /> */}
          <Suspense fallback={<div className='h-16 bg-white shadow-sm' />}>
            <Header />
          </Suspense>

          <main className='flex-grow'>
            <Suspense
              fallback={
                <div className='flex items-center justify-center min-h-screen'>
                  Loading...
                </div>
              }
            >
              <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Home />} />
                <Route path='/about/*' element={<About />} />
                <Route path='/resources/*' element={<Resources />} />
                <Route path='/get-involved' element={<GetInvolved />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/news' element={<News />} />
                <Route path='/events' element={<Events />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/terms' element={<Terms />} />

                {/* Auth Routes */}
                <Route path='/login' element={<Login />} />

                {/* Admin Routes */}
                <Route
                  path='/admin'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminDashboard />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/posts/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminPosts />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/events/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminEvents />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/newsletters/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminNewsletters />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/partners/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminPartners />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/volunteers/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminVolunteers />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/admin/settings/*'
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <AdminSettings />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />

                {/* 404 Route */}
                <Route path='*' element={<NotFound />} />

                {/* <Route path='/faqs' element={<FrequentlyAQ />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/services' element={<Services />} />
                <Route path='/terms' element={<LegalPage type='terms' />} />
                <Route path='/privacy' element={<LegalPage type='privacy' />} />  */}
              </Routes>
            </Suspense>
          </main>

          <Suspense fallback={<div className='h-64 bg-gray-100' />}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
