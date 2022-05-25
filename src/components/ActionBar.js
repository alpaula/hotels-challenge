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

const SelectOrder = styled.select`
  width: 16.5rem;
  height: 2.25rem;
  padding: 0 .25rem;
  border: 2px solid var(--app-dark);
  border-radius: 4px;
  background-color: transparent;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
  outline: none;

  :hover {
    background-color: var(--app-light-second);
  }
`;

const OptionOrder = styled.option``;

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
  isOrder,
  setOrder
}) => {
  const handleOrder = (ev) => {
    const { value } = ev.target;
    setOrder(value);
  }

  return (
    <Container>
      <SelectOrder name='order' onChange={handleOrder}>
        <OptionOrder value='lowerValue'>Menor para maior valor</OptionOrder>
        <OptionOrder value='biggerValue'>Maior para menor valor</OptionOrder>
        <OptionOrder value='lowerClassification'>Menor para maior classificação</OptionOrder>
        <OptionOrder value='biggerClassification' selected>Maior para menor classificação</OptionOrder>
      </SelectOrder>
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
}

export default ActionBar;
