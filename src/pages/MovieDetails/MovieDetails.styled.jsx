import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const Name = styled.h2`
  font-family: inherit;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 340px;
  border-radius: 5px;
  height: 510px;
  object-fit: cover;
`;

export const Genres = styled.p`
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Info = styled.div`
  width: 500px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #0088ff;
  }
`;

export const BackBtn = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 16px;
  transition: all 300ms ease-out;
  :hover {
    color: #fff;
    background-color: #0088ff;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 20px;
  margin-top: 16px;
`;

export const Layout = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;
