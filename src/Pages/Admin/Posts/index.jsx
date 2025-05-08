import { useState, useEffect } from 'react'
import { db } from '../../../config/firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore'
import AdminCard from '../../../components/admin/AdminCard'
import AdminButton from '../../../components/admin/AdminButton'
import AdminModal from '../../../components/admin/AdminModal'
import PostForm from './PostForm'

const AdminPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const postsQuery = query(
        collection(db, 'posts'),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(postsQuery)
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPosts(postsData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching posts:', err)
      setError('Failed to load posts. Please try again.')
      setLoading(false)
    }
  }

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setDeleteLoading(postId)
      try {
        await deleteDoc(doc(db, 'posts', postId))
        setPosts(posts.filter((post) => post.id !== postId))
      } catch (err) {
        console.error('Error deleting post:', err)
        setError('Failed to delete post. Please try again.')
      } finally {
        setDeleteLoading(null)
      }
    }
  }

  const handleEdit = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const handleCreate = () => {
    setSelectedPost(null)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  const handleSuccess = () => {
    handleModalClose()
    fetchPosts()
  }

  if (loading) {
    return <div>Loading posts...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Blog Posts</h1>
        <AdminButton variant='primary' onClick={handleCreate} icon='➕'>
          Create New Post
        </AdminButton>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <AdminCard
            key={post.id}
            title={post.title}
            actions={
              <div className='flex space-x-2'>
                <AdminButton
                  variant='secondary'
                  size='sm'
                  onClick={() => handleEdit(post)}
                  icon='✏️'
                >
                  Edit
                </AdminButton>
                <AdminButton
                  variant='danger'
                  size='sm'
                  onClick={() => handleDelete(post.id)}
                  loading={deleteLoading === post.id}
                  icon='🗑️'
                >
                  Delete
                </AdminButton>
              </div>
            }
          >
            <div className='space-y-4'>
              <p className='text-gray-600 line-clamp-3'>
                {post.excerpt || post.content.substring(0, 150) + '...'}
              </p>
              <div className='flex items-center justify-between text-sm text-gray-500'>
                <span>
                  {new Date(post.createdAt?.toDate()).toLocaleDateString()}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    post.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {post.status || 'draft'}
                </span>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedPost ? 'Edit Post' : 'Create Post'}
        size='lg'
      >
        <PostForm post={selectedPost} onSuccess={handleSuccess} />
      </AdminModal>
    </div>
  )
}

export default AdminPosts
