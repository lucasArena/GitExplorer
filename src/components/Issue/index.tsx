import React from 'react';

import { Container } from './styles';

interface RepositoryIssue {
  issue: {
    id: number;
    title: string;
    user: {
      login: string;
    };
    html_url: string;
  };
}

const Issue: React.FC<RepositoryIssue> = ({ issue }: RepositoryIssue) => {
  return (
    <Container href={issue.html_url} target="_blank">
      <h1>{issue.title}</h1>
      <p>{issue.user.login}</p>
    </Container>
  );
};

export default Issue;
