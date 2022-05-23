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
  background-color: var(--app-light);
  box-shadow: 0 0 12px #00000022;
`;

const Logo = styled.img`
  height: 80%;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

export default Header;
