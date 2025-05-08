import PropTypes from 'prop-types'

const AdminFormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error = null,
  required = false,
  placeholder = '',
  className = '',
  rows = 3,
  options = [],
  disabled = false,
}) => {
  const baseInputStyles = `
    w-full px-4 py-2 border rounded-lg
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${error ? 'border-red-300' : 'border-gray-300'}
    ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
  `

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            rows={rows}
            className={baseInputStyles}
          />
        )

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={baseInputStyles}
          >
            <option value=''>Select {label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      case 'checkbox':
        return (
          <input
            type='checkbox'
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
          />
        )

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            className={baseInputStyles}
          />
        )
    }
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </label>
      {renderField()}
      {error && <p className='text-sm text-red-600'>{error}</p>}
    </div>
  )
}

AdminFormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
    'textarea',
    'select',
    'checkbox',
    'date',
    'time',
    'datetime-local',
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  disabled: PropTypes.bool,
}

export default AdminFormField
