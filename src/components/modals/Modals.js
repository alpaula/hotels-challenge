// Libs
import React from 'react';
import styled, { keyframes } from 'styled-components';

const OpenAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// Styles
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--app-white-transparent);
  backdrop-filter: blur(2px);
  animation: ${OpenAnimation} .5s;
`;

const Modals = ({
  handleCloseModal,
  children
}) => {
  return (
    <Container onClick={handleCloseModal}>
      {children}
    </Container>
  );
}

export default Modals;
