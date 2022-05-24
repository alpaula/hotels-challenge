// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import logo from '../assets/logo-h.png';

// Styles
const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 3rem;
  background-color: var(--app-white-transparent);
  box-shadow: 0 0 12px #00000022;
`;

const Logo = styled.img`
  height: 75%;
  filter: drop-shadow(4px 6px 6px var(--app-dark-transparent));
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

export default Header;
