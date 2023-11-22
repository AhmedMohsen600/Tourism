import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <div className='flex flex-row'>
        <FontAwesomeIcon
          width={20}
          icon={faStar}
          key={i}
          className='text-yellow-500'
        />
      </div>
    );
  }

  return stars;
};
