import styled from 'styled-components';

export const Container = styled.a`
  background: #fff;
  padding: 20px 25px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s;

  text-decoration: none;

  h1 {
    font-size: 20px;
    color: #000;
  }

  p {
    color: #999;
    font-size: 18px;
  }

  & + a {
    margin-top: 15px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;
