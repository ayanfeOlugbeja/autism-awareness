import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 font-normal transition-all duration-300'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const LinkButton = ({
  to,
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 font-normal transition-all duration-300'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export const NavigationCard = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className='group block p-8 bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300'
  >
    <div className='text-blue-600 mb-4 transform transition-transform duration-300 group-hover:scale-110'>
      {icon}
    </div>
    <h3 className='text-lg font-normal text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
      {title}
    </h3>
    <p className='text-sm text-gray-500'>{description}</p>
  </Link>
)

export const QuickLink = ({ to, label }) => (
  <Link
    to={to}
    className='inline-block px-4 py-2 text-blue-600 hover:text-blue-800 font-normal transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300'
  >
    {label}
  </Link>
)

export const Input = ({ label, error, className = '', ...props }) => (
  <div className='mb-4'>
    {label && (
      <label className='block text-sm font-normal text-gray-700 mb-2'>
        {label}
      </label>
    )}
    <input
      className={`w-full px-4 py-2 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${className}`}
      {...props}
    />
    {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
  </div>
)

export const TextArea = ({ label, error, className = '', ...props }) => (
  <div className='mb-4'>
    {label && (
      <label className='block text-sm font-normal text-gray-700 mb-2'>
        {label}
      </label>
    )}
    <textarea
      className={`w-full px-4 py-2 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${className}`}
      {...props}
    />
    {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
  </div>
)
