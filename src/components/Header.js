// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import logo from '../assets/logo-h.png';
import { Link } from 'react-router-dom';

// Styles
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 3rem;
  background-color: var(--app-white-transparent);
  box-shadow: 0 0 12px #00000022;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.img`
  height: 3rem;
  filter: drop-shadow(4px 6px 6px var(--app-dark-transparent));
`;

const ReserveButton = styled.button`
  border: none;
  background-color: transparent;
  font: 400 1.125rem 'Roboto', sans-serif;
  color: var(--app-text);
  cursor: pointer;

  :hover {
    filter: drop-shadow(4px 6px 6px var(--app-dark-transparent));
  }
`;

const Header = () => (
  <Container>
    <Link to='/'>
      <Logo src={logo} />
    </Link>
    <Link to='/reserves'>
      <ReserveButton>Minhas reservas</ReserveButton>
    </Link>
  </Container>
);

export default Header;
