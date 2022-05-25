// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import breakfastIcon from '../assets/breakfast.png';
import tourIcon from '../assets/tour.png';
import starIcon from '../assets/star.png';

// Utils
import { formatPrice, getLowerValue } from '../utils/utils';

// Styles
const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(50% - .5rem);
  min-width: 580px;
  height: 12rem;
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

const StarList = styled.div`

`;

const City = styled.span`
  margin-top: 0;
  font: 300 .875rem 'Roboto', sans-serif;
  color: var(--app-text);
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

const Price = styled.span`
  margin-left: .5rem;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Icon = styled.img`
  width: 1.25rem;
  margin-right: .25rem;
`;

const Field = styled.span`
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const ReserveButton = styled.button`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display: none;
  padding: .25rem .75rem;
  border: 2px solid var(--app-dark);
  border-radius: 8px;
  background-color: transparent;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-dark);
  cursor: pointer;
  outline: none;
  transition: all .2s;

  :hover {
    background-color: var(--app-dark);
    color: var(--app-white);
    box-shadow: 2px 2px 8px var(--app-dark-transparent);
  }

  @media (max-width: 480px) {
    display: initial;
  }
`;

const Card = ({ item }) => {
  const getPrice = () => {
    const { week, weekend } = item.prices;
    const value = getLowerValue(week, weekend);

    return formatPrice(value);
  }

  const getStars = () => {
    const starsList = [];

    for (let i = 0; i < item.classification; i++) {
      starsList.push(
        <Icon src={starIcon} alt='ícone estrela' />
      )
    }

    return starsList;
  }

  return (
    <Container>
      <PhotoBox>
        <Photo src={item.photo} alt={`imagem do hotel ${item.name}`} />
      </PhotoBox>
      <DetailsBox>
        <BoxName>
          <Name>{item.name}</Name>
          <StarList>{getStars()}</StarList>
        </BoxName>
        <City>{item.city} - {item.state}</City>
        <Box>
          <Label>Diárias a partir de: </Label>
          <Price>{getPrice()}</Price>
        </Box>
        <Box hasOpacity={!item.breakfast}>
          <Icon src={breakfastIcon} alt="ícone de café da manhã" />
          <Field>Café da manhã incluso</Field>
        </Box>
        <Box hasOpacity={!item.tour}>
          <Icon src={tourIcon} alt="ícone de passeio" />
          <Field>Passeio incluso</Field>
        </Box>
      </DetailsBox>
      <ReserveButton>reservar</ReserveButton>
    </Container>
  );
}

export default Card;
