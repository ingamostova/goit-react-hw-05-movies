import { getReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  List,
  Title,
  Item,
  Author,
  Error,
  Notification,
  Layout,
} from './Reviews.styled';
import { RotatingLines } from 'react-loader-spinner';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews(id) {
      setIsLoading(true);
      try {
        const data = await getReviews(id);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && !isLoading && (
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
      )}

      {isLoading && (
        <Layout>
          <RotatingLines strokeColor="grey" strokeWidth="3" width="32" />
        </Layout>
      )}

      {!reviews.length && !isLoading && !error && (
        <Notification>There is no revie</Notification>
      )}

      {error && <Error>{error}</Error>}
    </>
  );
};

export default Reviews;
