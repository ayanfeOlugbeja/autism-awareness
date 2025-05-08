import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import AdminCard from '../../../Components/admin/AdminCard'
import AdminButton from '../../../Components/admin/AdminButton'
import PostForm from './PostForm'

const EditPost = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() })
        } else {
          setError('Post not found')
        }
      } catch (err) {
        console.error('Error fetching post:', err)
        setError('Failed to load post. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Edit Post</h1>
          <AdminButton
            variant='secondary'
            onClick={() => navigate('/admin/posts')}
            icon='←'
          >
            Back to Posts
          </AdminButton>
        </div>
        <AdminCard loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Edit Post</h1>
          <AdminButton
            variant='secondary'
            onClick={() => navigate('/admin/posts')}
            icon='←'
          >
            Back to Posts
          </AdminButton>
        </div>
        <AdminCard error={error} />
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Edit Post</h1>
        <AdminButton
          variant='secondary'
          onClick={() => navigate('/admin/posts')}
          icon='←'
        >
          Back to Posts
        </AdminButton>
      </div>

      <AdminCard>
        <PostForm post={post} />
      </AdminCard>
    </div>
  )
}

export default EditPost
