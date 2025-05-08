import { useState } from 'react'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    siteName: 'Autism Awareness',
    siteDescription: 'Promoting autism awareness and support.',
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
        setSuccess('Settings updated successfully!')
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Failed to update settings. Please try again.')
      setLoading(false)
    }
  }

  return (
    <AdminForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      submitLabel='Save Settings'
    >
      <AdminFormField
        label='Site Name'
        name='siteName'
        value={formData.siteName}
        onChange={handleChange}
        required
        placeholder='Enter site name'
      />
      <AdminFormField
        label='Site Description'
        name='siteDescription'
        type='textarea'
        value={formData.siteDescription}
        onChange={handleChange}
        required
        placeholder='Enter site description'
        rows={4}
      />
    </AdminForm>
  )
}

export default GeneralSettings
