// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import checkIcon from '../assets/check.png';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 4rem;
  padding: 0 3rem;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
  cursor: pointer;
`;

const Span = styled.span`
  position: relative;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .5rem;
  border-radius: 4px;
  border: 2px solid var(--app-dark);

  ${({ checked }) => checked && `
    background-color: var(--app-dark);

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: .875rem;
      height: .875rem;
      background: url(${checkIcon}) no-repeat center;
    }
  `}
`;

const ActionBar = ({
  isBreakfast,
  setBreakfast,
  isTour,
  setTour,
}) => (
  <Container>
    <Label onClick={() => setBreakfast(!isBreakfast)}>
      <Span checked={isBreakfast}></Span>
      Café da manhã incluso
    </Label>
    <Label onClick={() => setTour(!isTour)}>
      <Span checked={isTour}></Span>
      Passeio incluso
    </Label>
  </Container>
);

export default ActionBar;
