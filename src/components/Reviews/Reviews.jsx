import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  List,
  Title,
  Item,
  Author,
  Error,
  Notification,
} from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews(id) {
      try {
        const data = await getReviews(id);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <>
          <Title>REVIEWS</Title>
          <List>
            {reviews.map(review => (
              <Item key={review.id}>
                <Author>{review.author}</Author>
                <p>{review.content}</p>
              </Item>
            ))}
          </List>
        </>
      ) : (
        <Notification>There is no revie</Notification>
      )}
      {error && <Error>{error}</Error>}
    </>
  );
};
