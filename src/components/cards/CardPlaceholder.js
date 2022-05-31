// Libs
import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.li`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ margin }) => margin && `margin: ${margin}`};
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: var(--app-white-transparent);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardPlaceholder = ({ width, height, margin }) => (
  <Container
    data-testid='hotel-placeholder-item'
    width={width}
    height={height}
    margin={margin}
  />
);

export default CardPlaceholder;
