import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  Header,
  Content,
  RepositoryInfo,
  Logo,
  Statistics,
  Statistic,
  Issues,
} from './styles';

import Issue from '../../components/Issue';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [details, setDetails] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadDetails(): Promise<void> {
      try {
        const [repositoryInfo, repositoryIssues] = await Promise.all([
          api.get(`repos/${params.repository}`),
          api.get(`repos/${params.repository}/issues`),
        ]);

        setDetails(repositoryInfo.data);
        setIssues(repositoryIssues.data);
      } catch {
        alert('Erro na consulta do repositório');
      }
    }
    loadDetails();
  }, [params.repository]);
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <Link to="/">
          <FiChevronLeft size={20} color="#999" />
          Voltar
        </Link>
      </Header>
      <Content>
        {details && (
          <>
            <RepositoryInfo>
              <img
                src={
                  details.owner.avatar_url ||
                  `https://api.adorable.io/avatars/50/${details.full_name}.png`
                }
                alt={details.owner.login}
              />
              <div>
                <strong>{details.full_name}</strong>
                <p>{details.description}</p>
              </div>
            </RepositoryInfo>
            <Statistics>
              <Statistic>
                <strong>{details.stargazers_count}</strong>
                <p>Stars</p>
              </Statistic>
              <Statistic>
                <strong>{details.forks_count}</strong>
                <p>Forks</p>
              </Statistic>
              <Statistic>
                <strong>{details.open_issues_count}</strong>
                <p>Issues abertar</p>
              </Statistic>
            </Statistics>
          </>
        )}

        <Issues>
          {issues.map((issue) => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </Issues>
      </Content>
    </Container>
  );
};

export default Repository;
