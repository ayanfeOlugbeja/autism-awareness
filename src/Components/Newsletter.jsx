function NewsletterSignup() {
  return (
    <div
      className='w-full p-8 md:p-12 flex flex-col items-start justify-evenly text-white'
      style={{
        background: 'linear-gradient(135deg, #f44e9a, #961e5b)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
      <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
        Stay Connected with Us
      </h2>

      <p className=' text-center mb-8 max-w-2xl'>
        Get autism news, event information, heart-warming stories and more sent
        to your inbox.
      </p>

      {/* Signup Form */}
      <form className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-64 h-12 p-3  border-none text-gray-700 outline-none shadow-md'
          required
        />
        <button
          type='submit'
          className=' text-white  font-semibold  py-3 tracking-wider bg-transparent w-28 hover:border-white '>
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
