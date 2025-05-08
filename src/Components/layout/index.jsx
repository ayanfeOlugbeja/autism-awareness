import PropTypes from 'prop-types'

export const Container = ({ children, className = '' }) => (
  <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const Grid = ({ children, className = '', cols = 3 }) => {
  // Using template literals with dynamic values in Tailwind classes isn't recommended
  // for production as Tailwind won't purge unused classes properly
  // Better approach is to use a mapping object:
  const colsMap = {
    1: 'grid-cols-1 md:grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-6',
  }

  const colsClass = colsMap[cols] || colsMap[3] // Default to 3 if invalid value

  return (
    <div className={`grid gap-8 ${colsClass} ${className}`}>{children}</div>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cols: PropTypes.oneOf([1, 2, 3, 4, 6]),
}

export const Flex = ({
  children,
  className = '',
  justify = 'start',
  items = 'start',
}) => {
  // Using template literals with dynamic values in Tailwind classes isn't recommended
  // Better approach is to validate and map values:
  const justifyOptions = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }

  const itemsOptions = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  }

  const justifyClass = justifyOptions[justify] || justifyOptions.start
  const itemsClass = itemsOptions[items] || itemsOptions.start

  return (
    <div
      className={`flex flex-wrap ${justifyClass} ${itemsClass} gap-8 ${className}`}
    >
      {children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),
  items: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
}

export const Section = ({ children, className = '' }) => (
  <section className={`py-16 ${className}`}>{children}</section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const Card = ({ children, className = '' }) => (
  <div
    className={`bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const IconWrapper = ({ children, className = '' }) => (
  <div
    className={`text-blue-600 mb-4 transform transition-transform duration-300 group-hover:scale-110 ${className}`}
  >
    {children}
  </div>
)

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
