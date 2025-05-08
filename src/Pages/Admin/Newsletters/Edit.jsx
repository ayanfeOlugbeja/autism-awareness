import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const EditNewsletter = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate fetching newsletter data
    setTimeout(() => {
      setFormData({
        title: 'Sample Newsletter',
        content: 'This is a sample newsletter content.',
        publishDate: '2025-05-10',
      })
      setLoading(false)
    }, 1000)
  }, [id])

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
        setSuccess('Newsletter updated successfully!')
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Failed to update newsletter. Please try again.')
      setLoading(false)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <AdminForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      submitLabel="Update Newsletter"
    >
      <AdminFormField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Enter newsletter title"
      />
      <AdminFormField
        label="Content"
        name="content"
        type="textarea"
        value={formData.content}
        onChange={handleChange}
        required
        placeholder="Enter newsletter content"
        rows={6}
      />
      <AdminFormField
        label="Publish Date"
        name="publishDate"
        type="date"
        value={formData.publishDate}
        onChange={handleChange}
        required
      />
    </AdminForm>
  )
}

export default EditNewsletter