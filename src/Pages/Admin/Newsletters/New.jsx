import { useState } from 'react'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const NewNewsletter = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    publishDate: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      // Simulate API call
      setTimeout(() => {
        setSuccess('Newsletter created successfully!')
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Failed to create newsletter. Please try again.')
      setLoading(false)
    }
  }

  return (
    <AdminForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      submitLabel='Create Newsletter'
    >
      <AdminFormField
        label='Title'
        name='title'
        value={formData.title}
        onChange={handleChange}
        required
        placeholder='Enter newsletter title'
      />
      <AdminFormField
        label='Content'
        name='content'
        type='textarea'
        value={formData.content}
        onChange={handleChange}
        required
        placeholder='Enter newsletter content'
        rows={6}
      />
      <AdminFormField
        label='Publish Date'
        name='publishDate'
        type='date'
        value={formData.publishDate}
        onChange={handleChange}
        required
      />
    </AdminForm>
  )
}

export default NewNewsletter
