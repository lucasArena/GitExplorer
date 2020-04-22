import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Avatar, Content } from './styles';

interface Repository {
  repository: {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };
}

const GithubCard: React.FC<Repository> = ({ repository }: Repository) => (
  <Container>
    <Avatar
      src={
        repository.owner.avatar_url ||
        `https://api.adorable.io/avatars/50/${repository.full_name}.io.png`
      }
    />
    <Content>
      <p>{repository.owner.login}</p>
      <span>{repository.description}</span>
    </Content>

    <FiChevronRight size={20} color="#cbcbd6" />
  </Container>
);

export default GithubCard;
