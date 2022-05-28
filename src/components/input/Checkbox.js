// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import checkIcon from '../../assets/check.png';

// Styles
const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: .25rem;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
  cursor: ${props => props.disabled ? 'initial' : 'pointer'};

  @media (max-width: 480px) {
    margin: .25rem 0;
  }
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

const Checkbox = ({
  onClick,
  checked,
  disabled,
  text
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  }
  return (
    <Label
      onClick={handleClick}
      disabled={disabled}
    >
      <Span checked={checked}></Span>
      {text}
    </Label>
  );
}

export default Checkbox;
