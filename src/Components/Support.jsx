import info1 from './../assets/information-and-support-1.png';
import info2 from './../assets/information-and-support-2.png';
import info3 from './../assets/information-and-support-3.png';
import services1 from './../assets/services-and-event-1.png';
import services2 from './../assets/services-and-events-2.png';
import services3 from './../assets/services-and-events-3.png';
import resources1 from './../assets/resources-1.png';
import resources2 from './../assets/resources-2.png';
import resources3 from './../assets/resources-3.png';

function Support() {
  return (
    <div className='w-full flex flex-col gap-16 p-6 md:p-10'>
      {/* Autism Information and Support Section */}
      <section className='flex flex-col items-center gap-10'>
        <h2 className='text-gray-500 font-bold text-3xl text-center'>
          Autism information and support
        </h2>
        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full'>
          {[
            {
              title: 'What is autism?',
              image: info1,
              alt: 'Learn about autism spectrum disorder.',
              description: 'Learn more about autism spectrum disorder.',
            },
            {
              title: 'Signs of autism',
              image: info2,
              alt: 'Learn the signs of autism at any age.',
              description: 'Learn the signs of autism at any age.',
            },
            {
              title: 'Newly diagnosed',
              image: info3,
              alt: 'Get resources and support after a new autism diagnosis.',
              description:
                'Get resources and support after a new autism diagnosis.',
            },
          ].map((info, index) => (
            <div
              key={index}
              className='bg-white shadow-lg overflow-hidden h-80 dark:bg-gray-800 dark:border-gray-700'>
              <div className='relative'>
                <img
                  className='w-full h-56 object-cover'
                  src={info.image}
                  alt={info.alt}
                  loading='lazy'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                  <h3 className='text-blue-500 text-lg text-center bg-white p-2 h-10 w-3/4 hover:underline self-end'>
                    {info.title}
                  </h3>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-gray-700 dark:text-gray-400 text-center'>
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Autism Services and Events Section */}
      <section className='flex flex-col items-center gap-10'>
        <h2 className='text-gray-500 font-bold text-3xl text-center'>
          Find autism services and events in your community
        </h2>
        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full'>
          {[
            {
              title: 'Local services',
              image: services1,
              alt: 'Discover autism support services near you.',
              description: 'Discover autism support services near you.',
            },
            {
              title: 'Community events',
              image: services2,
              alt: 'Join autism awareness and support events.',
              description: 'Join autism awareness and support events.',
            },
            {
              title: 'Support groups',
              image: services3,
              alt: 'Connect with autism support groups in your community.',
              description:
                'Connect with autism support groups in your community.',
            },
          ].map((services, index) => (
            <div
              key={index}
              className='bg-white shadow-lg overflow-hidden h-80 dark:bg-gray-800 dark:border-gray-700'>
              <div className='relative'>
                <img
                  className='w-full h-56 object-cover'
                  src={services.image}
                  alt={services.alt}
                  loading='lazy'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                  <h3 className='text-blue-500 text-lg text-center bg-white p-2 h-10 w-3/4 hover:underline self-end'>
                    {services.title}
                  </h3>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-gray-700 dark:text-gray-400 text-center'>
                  {services.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className='flex flex-col items-center gap-10'>
        <h2 className='text-gray-500 font-bold text-3xl text-center'>
          Find the resources right for you
        </h2>
        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full'>
          {[
            {
              title: 'Educational resources',
              image: resources1,
              alt: 'Access educational materials about autism.',
              description: 'Access educational materials about autism.',
            },
            {
              title: 'Parent guides',
              image: resources2,
              alt: 'Explore parenting guides for autism support.',
              description: 'Explore parenting guides for autism support.',
            },
            {
              title: 'Professional support',
              image: resources3,
              alt: 'Find professional resources for autism care.',
              description: 'Find professional resources for autism care.',
            },
          ].map((resources, index) => (
            <div
              key={index}
              className='bg-white shadow-lg overflow-hidden h-80 dark:bg-gray-800 dark:border-gray-700'>
              <div className='relative'>
                <img
                  className='w-full h-56 object-cover'
                  src={resources.image}
                  alt={resources.alt}
                  loading='lazy'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                  <h3 className='text-blue-500 text-lg text-center bg-white p-2 h-10 w-3/4 hover:underline self-end'>
                    {resources.title}
                  </h3>
                </div>
              </div>
              <div className='p-4'>
                <p className='text-gray-700 dark:text-gray-400 text-center'>
                  {resources.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Support;
