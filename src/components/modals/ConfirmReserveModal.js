// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import confirmIcon from '../../assets/confirm.png';

// Styles
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  min-width: 700px;
  height: 27rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--app-white);
  box-shadow: 0 0 12px #00000033;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background-color: var(--app-white);
  font: 400 1.125rem 'Roboto', sans-serif;
  color: var(--app-dark);
  cursor: pointer;
  outline: none;
  transition: all .2s;

  :hover {
    color: var(--app-white);
    background-color: var(--app-light);
    box-shadow: 2px 2px 4px #00000022;
    box-shadow: 2px 2px 8px var(--app-dark-transparent);
  }
`;

const Title = styled.h3`
  margin: 0;
  font: 600 2rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Icon = styled.img`
  width: 6rem;
  margin: 2rem 0;
`;

const Message = styled.p`
  margin: 0;
  font: 400 1.125rem 'Roboto', sans-serif;
  color: var(--app-text);
  text-align: center;
`;

const ConfirmReserveModal = ({
  handleCloseModal
}) => {
  return (
    <Content onClick={ev => ev.stopPropagation()}>
      <CloseButton onClick={handleCloseModal}>
        x
      </CloseButton>
      <Title>Reserva confirmada</Title>
      <Icon src={confirmIcon} alt='ícone de confirmação de reserva' />
      <Message>Agradecemos a preferência <br />e desejamos uma ótima estadia.</Message>
    </Content>
  );
}
export default ConfirmReserveModal;
