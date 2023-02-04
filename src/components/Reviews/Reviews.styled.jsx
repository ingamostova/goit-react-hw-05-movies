import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 16px;
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 16px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
`;

export const Item = styled.li`
  max-width: 900px;
`;

export const Author = styled.p`
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  font-style: italic;
`;

export const Error = styled.p`
  color: red;
  font-size: 20px;
  margin-top: 16px;
`;

export const Notification = styled.p`
  color: black;
  font-size: 20px;
  margin-top: 16px;
  text-align: center;
`;
