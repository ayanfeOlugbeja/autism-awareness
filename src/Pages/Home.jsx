import Support from '../Components/Support';
import heroImage from './../assets/Tonya-and-Tyler.png';
function Home() {
  return (
    <div>
      <div className='mt-32 h-[950px] w-full  bg-gradient-to-r from-pink-500 to-red-500 p-10 flex flex-col justify-around'>
        <h1 className='text-white font-bold text-4xl w-11/12 '>
          Making strides today toward a spectrum of possibilities tomorrow.
        </h1>
        <img src={heroImage} alt='Tonya-and-Tyler-hero' />
      </div>
      <Support />
    </div>
  );
}

export default Home;
