import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;

  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #999;
  }
`;
export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 108px;
    height: 108px;
    border-radius: 50%;
  }

  div {
    margin-top: 20px;
    margin-left: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      color: #999;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: start;
  }
`;

export const Logo = styled.img``;
export const Statistics = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;
export const Statistic = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + div {
    margin-left: 30px;
  }

  strong {
    font-size: 22px;
  }

  p {
    color: #999;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
export const Issues = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;
