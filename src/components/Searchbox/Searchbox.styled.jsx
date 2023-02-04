import styled from '@emotion/styled';

export const Input = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  border-radius: 8px;
  outline: none;
  padding: 8px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

export const Btn = styled.button`
  border-radius: 8px;
  transition: all 300ms ease-out;
  :hover {
    cursor: pointer;
    background-color: #0088ff;
    color: #fff;
  }
`;
