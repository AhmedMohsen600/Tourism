import { FC } from 'react';
import Image from 'next/image';
import { renderStars } from '@/helper/renderStars';

export interface CardProps {
  name: string;
  description: string;
  job: string;
  imgSrc: string;
  bgColor: string;
  rating: number;
}

export const TestimonialCard: FC<CardProps> = (props) => {
  const { name, description, job, imgSrc, bgColor, rating } = props;

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`relative flex flex-col items-center text-center mt-20 bg-${bgColor} rounded-lg p-10 transition-transform duration-300 hover:transform hover:-translate-y-6`}
    >
      <div className='absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-100'>
        <Image
          unoptimized={true}
          width={20}
          height={20}
          src={imgSrc}
          alt={`${name}'s profile`}
          className='h-20 w-20 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-105'
        />
      </div>
      <div className='mt-8'>
        <p className={`${bgColor === '#ff795b' ? 'text-white' : 'text-black'}`}>
          {description}
        </p>
        <h2
          className={`${
            bgColor === '#ff795b' ? 'text-white' : 'text-black'
          } text-lg font-semibold`}
        >
          {name}
        </h2>
        <p
          className={` ${
            bgColor === '#ff795b' ? 'text-white' : 'text-gray-500'
          } `}
        >
          {job}
        </p>
      </div>
      <div className='flex items-center mt-2'>{renderStars(rating)}</div>
    </div>
  );
};
