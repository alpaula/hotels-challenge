// Libs
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Images
import breakfastIcon from '../../assets/breakfast.png';
import tourIcon from '../../assets/tour.png';
import roomIcon from '../../assets/room.png';
import trashIcon from '../../assets/trash-can.png';
import loadingIcon from '../../assets/loading.svg';

// Utils
import { formatPrice } from '../../utils/utils';

// Components
import Stars from '../Stars';

// Styles
const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 580px;
  height: 15rem;
  margin: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: var(--app-white);
  box-shadow: 0 0 12px #0000000D;
  overflow: hidden;
  transition: all .2s;

  :hover {
    box-shadow: 0 0 16px var(--app-white);
    transform: scale(1.02);

    button {
      display: initial;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: 25rem;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 100%;
    height: 45%;
  }
`;

const Photo = styled.img`
  width: 100%;
`;

const DetailsBox = styled.div`
  width: 70%;
  height: 100%;
  padding: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 55%;
  }
`;

const BoxName = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  margin: 0;
  font: 500 1.125rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const City = styled.span`
  margin-top: 0;
  font: 300 .875rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const PricesBox = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsPrices = styled.div`
  width: 60%;
  margin-top: 1.5rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  ${({ hasOpacity }) => hasOpacity && `
    opacity: .3;
    text-decoration: line-through;
  `}
`;

const Label = styled.label`
  font: 400 .675rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Icon = styled.img`
  width: 1.25rem;
  margin-right: .25rem;
`;

const Field = styled.span`
  margin-right: .5rem;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const LineVert = styled.hr`
  height: 6rem;
  margin: 0 1rem;
  border-left: 1px solid var(--app-dark);
`;

const TotalBox = styled.div`
  width: 40%;

  > label {
    display: block;
    margin-bottom: 1rem;
  }
`;

const ReserveButton = styled.button`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: .25rem .75rem;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-dark);
  cursor: pointer;
  outline: none;
  transition: all .2s;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background: url(${({ isLoading }) => isLoading ? loadingIcon : trashIcon}) no-repeat center;
    background-size: contain;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  

  :hover {
    background-color: var(--app-dark-transparent);
    color: var(--app-white);
    box-shadow: 2px 2px 8px var(--app-dark-transparent);
  }

  @media (max-width: 480px) {
    display: initial;
  }
`;

const CardReserve = ({
  item,
  removeReserva
}) => {
  const [loading, setLoading] = useState(false);

  const deleteReserves = async () => {
    try {
      setLoading(true);

      await axios({
        method: 'delete',
        url: '/reserves',
        data: {
          id: item.id
        }
      });

      removeReserva(item.id);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Container>
      <PhotoBox>
        <Photo src={item.photo} alt={`imagem do hotel ${item.name}`} />
      </PhotoBox>
      <DetailsBox>
        <BoxName>
          <Name>{item.name}</Name>
          <Stars
            classification={item.classification}
            width='1.25rem'
          />
        </BoxName>
        <City>{item.city} - {item.state}</City>
        <PricesBox>
          <DetailsPrices>
            <Box>
              <Icon src={roomIcon} alt="ícone de quarto" />
              <Field>{formatPrice(item.prices.room)}</Field>
              <Label>{item.type === 'week' ? '(Dia' : '(Fim'} de Semana) </Label>
            </Box>
            <Box hasOpacity={item.prices.breakfast === null}>
              <Icon src={breakfastIcon} alt="ícone de café da manhã" />
              <Field>
                {item.prices.breakfast === 0 ? 'Café da manhã incluso' : formatPrice(item.prices.breakfast)}
              </Field>
            </Box>
            <Box hasOpacity={item.prices.tour === null}>
              <Icon src={tourIcon} alt="ícone de passeio" />
              <Field>
                {item.prices.tour === 0 ? 'Passeio incluso' : formatPrice(item.prices.tour)}
              </Field>
            </Box>
          </DetailsPrices>
          <LineVert />
          <TotalBox>
            <Label>Total da reserva:</Label>
            <Field>
              {formatPrice(item.prices.reserve)}
            </Field>
          </TotalBox>
        </PricesBox>
      </DetailsBox>
      <ReserveButton
        isLoading={loading}
        onClick={deleteReserves}
      >
      </ReserveButton>
    </Container>
  );
}

export default CardReserve;
