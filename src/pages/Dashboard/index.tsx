import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Title, Form, GithubList, Error } from './styles';
import logoImg from '../../assets/logo.svg';

import GithubCard from '../../components/GithubCard';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    try {
      if (!newRepo) {
        setInputError('Repositório obrigatório');
        return;
      }

      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories((oldRepositories) => [...oldRepositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore os repositórios no github</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <GithubList>
        {repositories.map((repository) => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <GithubCard key={repository.full_name} repository={repository} />
          </Link>
        ))}
      </GithubList>
    </>
  );
};

export default Dashboard;
