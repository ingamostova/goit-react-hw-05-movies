import { getCast } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  List,
  Image,
  ActorsTitle,
  Item,
  ActorInfo,
  Notification,
  Error,
  Layout,
} from './Cast.styled';
import { BiCameraMovie } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { RotatingLines } from 'react-loader-spinner';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchCast(id) {
      try {
        const data = await getCast(id);
        setCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && !isLoading && (
        <>
          <ActorsTitle>ACTORS</ActorsTitle>
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <Image
                  src={
                    actor.profile_path === null
                      ? `https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__340.png`
                      : `https://image.tmdb.org/t/p/w185/${actor.profile_path}`
                  }
                  alt=""
                />
                <ActorInfo>
                  <BsPersonCircle />
                  {actor.name}
                </ActorInfo>
                <ActorInfo>
                  <BiCameraMovie />
                  {actor.character}
                </ActorInfo>
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

      {!cast.length && !isLoading && !error && (
        <Notification>No information about actors</Notification>
      )}

      {error && <Error>{error}</Error>}
    </>
  );
};

export default Cast;
