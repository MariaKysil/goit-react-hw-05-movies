import { ReviewsView } from 'components/ReviewsView/ReviewsView';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { ReviewsWrapper } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsWrapper>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <ReviewsView author={author} content={content}></ReviewsView>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie 😢</p>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
