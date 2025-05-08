import React from 'react'

export const Container = ({ children, className = '' }) => (
  <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

export const Grid = ({ children, className = '', cols = 3 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-8 ${className}`}>
    {children}
  </div>
)

export const Flex = ({
  children,
  className = '',
  justify = 'start',
  items = 'start',
}) => (
  <div
    className={`flex flex-wrap justify-${justify} items-${items} gap-8 ${className}`}
  >
    {children}
  </div>
)

export const Section = ({ children, className = '' }) => (
  <section className={`py-16 ${className}`}>{children}</section>
)

export const Card = ({ children, className = '' }) => (
  <div
    className={`bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
)

export const IconWrapper = ({ children, className = '' }) => (
  <div
    className={`text-blue-600 mb-4 transform transition-transform duration-300 group-hover:scale-110 ${className}`}
  >
    {children}
  </div>
)
