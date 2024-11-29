import Support from '../Components/Support';
import heroImage from './../assets/Tonya-and-Tyler.png';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className='mt-32 h-auto w-full bg-gradient-to-r from-pink-500 to-red-500 p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-around gap-8'>
        <h1 className='text-white font-bold text-2xl md:text-4xl text-center md:text-left w-full md:w-1/2'>
          Making strides today toward a spectrum of possibilities tomorrow.
        </h1>
        <img
          className='w-full md:w-1/2 h-auto object-contain'
          src={heroImage}
          alt='Tonya and Tyler hero image showcasing autism awareness'
          loading='lazy'
        />
      </div>

      {/* Support Section */}
      <Support />
    </div>
  );
}

export default Home;
