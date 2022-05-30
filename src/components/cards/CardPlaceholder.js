// Libs
import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - .5rem);
  height: 12rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: var(--app-white-transparent);
`;

const CardPlaceholder = () => (
  <Container />
);

export default CardPlaceholder;
