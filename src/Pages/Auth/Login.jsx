import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card } from '../../Components/layout'
import { Heading, BodyText } from '../../Components/typography'
import { Button } from '../../Components/interactive'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [status, setStatus] = useState({
    loading: false,
    error: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: null })

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      navigate('/admin')
    } catch (err) {
      console.error('Login error:', err)
      setStatus({
        loading: false,
        error: 'Invalid email or password. Please try again.',
      })
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <Container>
        <div className='max-w-md w-full mx-auto'>
          <Card className='p-8'>
            <div className='text-center mb-8'>
              <Heading className='text-3xl mb-2'>Admin Login</Heading>
              <BodyText className='text-gray-600'>
                Sign in to access the admin dashboard
              </BodyText>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>

              {status.error && (
                <div className='text-red-600 text-sm'>{status.error}</div>
              )}

              <Button
                type='submit'
                variant='primary'
                className='w-full'
                disabled={status.loading}
              >
                {status.loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default Login
