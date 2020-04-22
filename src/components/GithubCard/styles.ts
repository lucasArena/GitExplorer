import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  background: #fff;
  padding: 15px 20px;
  max-width: 700px;

  transition: transform 0.4s;

  & + button {
    margin-top: 10px;
  }

  svg {
    display: none;
  }

  &:hover {
    transform: translateX(10px);
  }

  @media (min-width: 768px) {
    flex-direction: row;

    svg {
      margin-left: auto;
      display: block;
    }
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  flex: 1;

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: #999;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
