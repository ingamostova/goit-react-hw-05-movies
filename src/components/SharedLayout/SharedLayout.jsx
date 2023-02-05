import {
  Container,
  Header,
  Link,
  Layout,
} from 'components/SharedLayout/SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <Layout>
            <RotatingLines strokeColor="grey" strokeWidth="3" width="77" />
          </Layout>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
