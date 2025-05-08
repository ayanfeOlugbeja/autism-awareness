import PropTypes from 'prop-types'
import { useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore'
import AdminForm from '../../../components/admin/AdminForm'
import AdminFormField from '../../../components/admin/AdminFormField'

const ResourceForm = ({ resource = null, onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({
    title: resource?.title || '',
    description: resource?.description || '',
    type: resource?.type || 'article',
    url: resource?.url || '',
    tags: resource?.tags || [],
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
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const resourceData = {
        ...formData,
        updatedAt: new Date(),
      }

      if (!resource) {
        resourceData.createdAt = new Date()
        const docRef = doc(collection(db, 'resources'))
        await setDoc(docRef, resourceData)
        setSuccess('Resource created successfully!')
      } else {
        await updateDoc(doc(db, 'resources', resource.id), resourceData)
        setSuccess('Resource updated successfully!')
      }

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      console.error('Error saving resource:', err)
      setError('Failed to save resource. Please try again.')
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
      submitLabel={resource ? 'Update Resource' : 'Create Resource'}
    >
      <AdminFormField
        label='Title'
        name='title'
        value={formData.title}
        onChange={handleChange}
        required
        placeholder='Enter resource title'
      />

      <AdminFormField
        label='Description'
        name='description'
        type='textarea'
        value={formData.description}
        onChange={handleChange}
        required
        placeholder='Enter resource description'
        rows={4}
      />

      <AdminFormField
        label='Type'
        name='type'
        type='select'
        value={formData.type}
        onChange={handleChange}
        options={[
          { label: 'Article', value: 'article' },
          { label: 'Video', value: 'video' },
          { label: 'Book', value: 'book' },
          { label: 'Tool', value: 'tool' },
        ]}
      />

      <AdminFormField
        label='URL'
        name='url'
        type='url'
        value={formData.url}
        onChange={handleChange}
        placeholder='Enter resource URL'
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

ResourceForm.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  onSuccess: PropTypes.func,
}

export default ResourceForm
