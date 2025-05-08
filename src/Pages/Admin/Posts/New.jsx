import { useNavigate } from 'react-router-dom'
import AdminCard from '../../../components/admin/AdminCard'
import AdminButton from '../../../components/admin/AdminButton'
import PostForm from './PostForm'

const NewPost = () => {
  const navigate = useNavigate()

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create New Post</h1>
        <AdminButton
          variant='secondary'
          onClick={() => navigate('/admin/posts')}
          icon='←'
        >
          Back to Posts
        </AdminButton>
      </div>

      <AdminCard>
        <PostForm />
      </AdminCard>
    </div>
  )
}

export default NewPost
