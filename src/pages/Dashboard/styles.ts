import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;

  margin-top: 80px;
  max-width: 550px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    background: #fff;
    border-radius: 4px;
    padding: 10px 15px;
    flex: 1;
    color: #3a3a3a;

    border: 2px solid ${(props) => (props.hasError ? 'red' : '#FFF')};

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    color: #fff;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const GithubList = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    max-width: 700px;
    border-radius: 4px;

    margin-top: 10px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
