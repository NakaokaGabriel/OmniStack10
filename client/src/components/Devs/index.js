import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, DevList, Info } from './styles';

import Register from '../Register';

export default function Devs() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  return (
    <>
      <Register onSubmit={handleAddDev} />
      <Container>
        <DevList>
          {devs.map(dev => (
            <li key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <Info>
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </Info>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
            </li>
          ))}
        </DevList>
      </Container>
    </>
  );
}
