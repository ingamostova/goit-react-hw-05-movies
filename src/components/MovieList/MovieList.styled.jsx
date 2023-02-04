import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  width: 340px;
  background-color: #0088ff;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 510px;
  object-fit: cover;
`;

export const Title = styled.h3`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
