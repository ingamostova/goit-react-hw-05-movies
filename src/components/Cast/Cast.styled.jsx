import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: baseline;
  margin-top: 16px;
`;

export const Image = styled.img`
  width: 185px;
  border-radius: 5px;
  max-height: 277px;
  object-fit: cover;
`;

export const ActorsTitle = styled.p`
  text-align: center;
  margin-top: 16px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
`;

export const Item = styled.li`
  max-width: 185px;
`;

export const ActorInfo = styled.p`
  margin-top: 8px;
  display: flex;
  gap: 5px;
`;
