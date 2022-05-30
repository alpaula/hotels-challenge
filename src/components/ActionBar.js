// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Checkbox from './input/Checkbox';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 3rem;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
  }
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

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

const OptionOrder = styled.option``;

const ActionBar = ({
  isBreakfast,
  setBreakfast,
  isTour,
  setTour,
  setOrder
}) => {
  const handleOrder = (ev) => {
    const { value } = ev.target;
    setOrder(value);
  }

  return (
    <Container>
      <SelectOrder name='order' onChange={handleOrder} defaultValue="biggerClassification">
        <OptionOrder value='lowerValue'>Menor para maior valor</OptionOrder>
        <OptionOrder value='biggerValue'>Maior para menor valor</OptionOrder>
        <OptionOrder value='lowerClassification'>Menor para maior classificação</OptionOrder>
        <OptionOrder value='biggerClassification'>Maior para menor classificação</OptionOrder>
      </SelectOrder>
      <Checkbox
        onClick={() => setBreakfast(!isBreakfast)}
        checked={isBreakfast}
        text='Café da manhã incluso'
      />
      <Checkbox
        onClick={() => setTour(!isTour)}
        checked={isTour}
        text='Passeio incluso'
      />
    </Container>
  );
}

export default ActionBar;
