import PropTypes from 'prop-types'
import { useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const PostForm = ({ post = null, onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    status: post?.status || 'draft',
    featuredImage: post?.featuredImage || '',
    tags: post?.tags || [],
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const postData = {
        ...formData,
        updatedAt: new Date(),
      }

      if (!post) {
        postData.createdAt = new Date()
        const docRef = doc(collection(db, 'posts'))
        await setDoc(docRef, postData)
        setSuccess('Post created successfully!')
      } else {
        await updateDoc(doc(db, 'posts', post.id), postData)
        setSuccess('Post updated successfully!')
      }

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      console.error('Error saving post:', err)
      setError('Failed to save post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      submitLabel={post ? 'Update Post' : 'Create Post'}
    >
      <AdminFormField
        label='Title'
        name='title'
        value={formData.title}
        onChange={handleChange}
        required
        placeholder='Enter post title'
      />

      <AdminFormField
        label='Excerpt'
        name='excerpt'
        type='textarea'
        value={formData.excerpt}
        onChange={handleChange}
        placeholder='Enter post excerpt'
        rows={2}
      />

      <AdminFormField
        label='Content'
        name='content'
        type='textarea'
        value={formData.content}
        onChange={handleChange}
        required
        placeholder='Enter post content'
        rows={10}
      />

      <AdminFormField
        label='Status'
        name='status'
        type='select'
        value={formData.status}
        onChange={handleChange}
        options={[
          { label: 'Draft', value: 'draft' },
          { label: 'Published', value: 'published' },
        ]}
      />

      <AdminFormField
        label='Featured Image URL'
        name='featuredImage'
        type='url'
        value={formData.featuredImage}
        onChange={handleChange}
        placeholder='Enter image URL'
      />

      <AdminFormField
        label='Tags'
        name='tags'
        value={formData.tags.join(', ')}
        onChange={(e) => {
          const tags = e.target.value.split(',').map((tag) => tag.trim())
          setFormData((prev) => ({ ...prev, tags }))
        }}
        placeholder='Enter tags separated by commas'
      />
    </AdminForm>
  )
}

PostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    excerpt: PropTypes.string,
    status: PropTypes.string,
    featuredImage: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  onSuccess: PropTypes.func,
}

export default PostForm
