import PropTypes from 'prop-types'
import { useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore'
import AdminForm from '../../../components/admin/AdminForm'
import AdminFormField from '../../../components/admin/AdminFormField'

const NewsletterForm = ({ newsletter = null, onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({
    title: newsletter?.title || '',
    content: newsletter?.content || '',
    status: newsletter?.status || 'draft',
    scheduledFor: newsletter?.scheduledFor
      ? new Date(newsletter.scheduledFor.toDate()).toISOString().split('T')[0]
      : '',
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
      const newsletterData = {
        ...formData,
        scheduledFor: formData.scheduledFor
          ? new Date(formData.scheduledFor)
          : null,
        updatedAt: new Date(),
      }

      if (!newsletter) {
        newsletterData.createdAt = new Date()
        const docRef = doc(collection(db, 'newsletters'))
        await setDoc(docRef, newsletterData)
        setSuccess('Newsletter created successfully!')
      } else {
        await updateDoc(doc(db, 'newsletters', newsletter.id), newsletterData)
        setSuccess('Newsletter updated successfully!')
      }

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      console.error('Error saving newsletter:', err)
      setError('Failed to save newsletter. Please try again.')
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
      submitLabel={newsletter ? 'Update Newsletter' : 'Create Newsletter'}
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
        rows={10}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <AdminFormField
          label='Status'
          name='status'
          type='select'
          value={formData.status}
          onChange={handleChange}
          options={[
            { label: 'Draft', value: 'draft' },
            { label: 'Scheduled', value: 'scheduled' },
            { label: 'Sent', value: 'sent' },
          ]}
        />

        <AdminFormField
          label='Schedule For'
          name='scheduledFor'
          type='date'
          value={formData.scheduledFor}
          onChange={handleChange}
          disabled={formData.status !== 'scheduled'}
        />
      </div>
    </AdminForm>
  )
}

NewsletterForm.propTypes = {
  newsletter: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    status: PropTypes.string,
    scheduledFor: PropTypes.object,
  }),
  onSuccess: PropTypes.func,
}

export default NewsletterForm
