// Libs
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const placeholderAnimate = keyframes`
	0% { background-position: 300% 0; }
	100% { background-position: -300% 0; }
`;

// Styles
const Container = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - .5rem);
  height: 12rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  animation: ${placeholderAnimate} 3s infinite linear;
  background-image: linear-gradient(to right, var(--app-white) 10%, #d8d8d8 70%, var(--app-white) 100%);
  background-size: 150% 300%;
`;

const CardPlaceholder = () => (
  <Container>
  </Container>
);

export default CardPlaceholder;
