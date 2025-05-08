import { useState, useEffect } from 'react'
import { Card } from '../../../components/layout'
import { Heading, BodyText } from '../../../components/typography'
import { Button } from '../../../components/interactive'
import { db } from '../../../config/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: '',
    siteDescription: '',
    contactEmail: '',
    contactPhone: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
    },
    newsletterSettings: {
      welcomeMessage: '',
      unsubscribeMessage: '',
    },
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const docRef = doc(db, 'settings', 'general')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setSettings(docSnap.data())
      }
      setLoading(false)
    } catch (err) {
      console.error('Error fetching settings:', err)
      setError('Failed to load settings. Please try again.')
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [section, field] = name.split('.')
      setSettings((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }))
    } else {
      setSettings((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const docRef = doc(db, 'settings', 'general')
      await updateDoc(docRef, settings)
      setSuccess(true)
      setLoading(false)
    } catch (err) {
      console.error('Error updating settings:', err)
      setError('Failed to update settings. Please try again.')
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading settings...</div>
  }

  return (
    <div className='space-y-6'>
      <Heading className='text-3xl'>Settings</Heading>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <Card className='p-6'>
          <Heading className='text-xl mb-4'>General Settings</Heading>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='siteName'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Site Name
              </label>
              <input
                type='text'
                id='siteName'
                name='siteName'
                value={settings.siteName}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='siteDescription'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Site Description
              </label>
              <textarea
                id='siteDescription'
                name='siteDescription'
                value={settings.siteDescription}
                onChange={handleChange}
                rows='3'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='contactEmail'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contactEmail'
                name='contactEmail'
                value={settings.contactEmail}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='contactPhone'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contactPhone'
                name='contactPhone'
                value={settings.contactPhone}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <Heading className='text-xl mb-4'>Social Media Links</Heading>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='socialMedia.facebook'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Facebook URL
              </label>
              <input
                type='url'
                id='socialMedia.facebook'
                name='socialMedia.facebook'
                value={settings.socialMedia.facebook}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='socialMedia.twitter'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Twitter URL
              </label>
              <input
                type='url'
                id='socialMedia.twitter'
                name='socialMedia.twitter'
                value={settings.socialMedia.twitter}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='socialMedia.instagram'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Instagram URL
              </label>
              <input
                type='url'
                id='socialMedia.instagram'
                name='socialMedia.instagram'
                value={settings.socialMedia.instagram}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='socialMedia.linkedin'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                LinkedIn URL
              </label>
              <input
                type='url'
                id='socialMedia.linkedin'
                name='socialMedia.linkedin'
                value={settings.socialMedia.linkedin}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
          </div>
        </Card>

        <Card className='p-6'>
          <Heading className='text-xl mb-4'>Newsletter Settings</Heading>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='newsletterSettings.welcomeMessage'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Welcome Message
              </label>
              <textarea
                id='newsletterSettings.welcomeMessage'
                name='newsletterSettings.welcomeMessage'
                value={settings.newsletterSettings.welcomeMessage}
                onChange={handleChange}
                rows='3'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='newsletterSettings.unsubscribeMessage'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Unsubscribe Message
              </label>
              <textarea
                id='newsletterSettings.unsubscribeMessage'
                name='newsletterSettings.unsubscribeMessage'
                value={settings.newsletterSettings.unsubscribeMessage}
                onChange={handleChange}
                rows='3'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
          </div>
        </Card>

        {error && <div className='text-red-600'>{error}</div>}

        {success && (
          <div className='text-green-600'>Settings updated successfully!</div>
        )}

        <div className='flex justify-end'>
          <Button type='submit' variant='primary' disabled={loading}>
            {loading ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AdminSettings
