import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/data/data';
import { Fragment } from 'react';

export default function Home() {
  return (
    <main
      style={{ background: '#283464' }}
      className='flex min-h-screen flex-col items-center justify-between'
    >
      <section className='w-[95%] h-screen flex flex-col justify-center items-center space-x-4'>
        <div className='flex flex-col justify-center items-center mb-10'>
          <h1 style={{ color: '#4d9de1' }}>Clint's testimonials</h1>
          <h1 style={{ color: 'white', fontSize: 30 }}>
            Unforgettable travel experiences
          </h1>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          {testimonials.map((testimonial, index) => (
            <Fragment key={index}>
              <TestimonialCard {...testimonial} />
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
