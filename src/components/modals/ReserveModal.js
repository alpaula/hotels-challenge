// Libs
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Utils
import { formatPrice } from '../../utils/utils';

// Images
import breakfastIcon from '../../assets/breakfast.png';
import tourIcon from '../../assets/tour.png';
import loadingIcon from '../../assets/loading-pink.svg';

// Components
import Stars from '../Stars';
import Checkbox from '../input/Checkbox';

// Styles
const Content = styled.div`
  position: relative;
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

const BoxDetails = styled.div`
  display: flex;

  justify-content: space-between;
`;

const CoverImage = styled.img`
  width: 35%;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #00000022;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
`;

const HotelName = styled.h2`
  margin: .5rem 1rem 1.25rem 0;
  font: 500 1.75rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: .5rem 0;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: .5rem;
  font: 300 .75rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Span = styled.span`
  margin-top: 0;
  font: 300 1rem 'Roboto', sans-serif;
  color: var(--app-text);
`;

const Line = styled.hr`
  width: 100%;
  margin: 1rem 0;
  border-top: 1px solid var(--app-dark);
`;

const InputRadius = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  opacity: 0;
`;

const SpanRadius = styled.span`
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .5rem;
  border-radius: 50%;
  border: 2px solid var(--app-dark);

  ${({ checked }) => checked && `
    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: .75rem;
      height: .75rem;
      border-radius: 50%;
      background-color: var(--app-dark);
    }
  `}
`;

const Icon = styled.img`
  width: 1.25rem;
  margin-right: ${props => props.hasMargin ? '.5rem' : '-.5rem'};
`;

const LineVert = styled.hr`
  height: 6rem;
  margin: 0 1rem;
  border-left: 1px solid var(--app-dark);
`;

const ReserveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 2.5rem;
  margin: auto;
  margin-top: 2rem;
  border: none;
  border: 2px solid var(--app-dark);
  border-radius: 8px;
  background-color: transparent;
  font: 400 1rem 'Roboto', sans-serif;
  color: var(--app-dark);
  outline: none;
  transition: all .2s;
  
  ${({ disabled }) => !disabled && `
    cursor: pointer;

    :hover {
      background-color: var(--app-dark);
      color: var(--app-white);
      box-shadow: 2px 2px 8px var(--app-dark-transparent);
    }
  `}

  /* @media (max-width: 480px) {
    display: initial;
  } */
`;

const LoadingIcon = styled.img`
  display: inline-block;
  width: 1.5rem;
  margin-left: .5rem;
`;

const ReserveModal = ({
  setModal,
  hotel,
  handleCloseModal
}) => {
  const [selectedPrice, setPrice] = useState('week');
  const [isBreakfast, setBreakfast] = useState(hotel.breakfast);
  const [isTour, setTour] = useState(hotel.tour);
  const [loading, setLoading] = useState(false);

  const selectBreakfastPrice = () => {
    if (!hotel.breakfast && isBreakfast) return getBreakfastPrice();
    if (hotel.breakfast) return 0;
    return null;
  }

  const selectTourPrice = () => {
    if (!hotel.tour && isTour) return getTourPrice();
    if (hotel.tour) return 0;
    return null;
  }

  const handleReserve = async () => {
    try {
      setLoading(true);

      await axios({
        method: 'post',
        url: '/reserve',
        data: {
          ...hotel,
          type: selectedPrice,
          prices: {
            room: hotel.prices[selectedPrice],
            breakfast: selectBreakfastPrice(),
            tour: selectTourPrice(),
            reserve: getTotalPrice()
          },
        }
      });

      setLoading(false);
      setModal({
        type: 'confirm-reserve',
        isOpen: true
      })
    } catch (err) {
      setLoading(false);
    }
  }

  const handleChangePrice = (ev) => {
    const { value } = ev.target;
    setPrice(value);
  }

  const getBreakfastPrice = () => {
    const value = hotel.prices[selectedPrice] * 0.1;
    return +value.toFixed(2);
  };

  const getTourPrice = () => {
    const value = hotel.prices[selectedPrice] * 0.2
    return +value.toFixed(2);
  };

  const getTotalPrice = () => {
    let value = hotel.prices[selectedPrice];

    if (!hotel.breakfast && isBreakfast) {
      value = value + getBreakfastPrice();
    }

    if (!hotel.tour && isTour) {
      value = value + getTourPrice();
    }

    return value;
  }

  return (
    <Content onClick={ev => ev.stopPropagation()}>
      <CloseButton onClick={handleCloseModal}>
        x
      </CloseButton>
      <BoxDetails>
        <CoverImage src={hotel.photo} />
        <Box width='calc(65% - 1rem)'>
          <Stars
            classification={hotel.classification}
            width='1rem'
          />
          <HotelName>{hotel.name}</HotelName>
          <Label>{hotel.city} - {hotel.state}</Label>
          <Row>
            <Span>{hotel.address}</Span>
          </Row>
        </Box>
      </BoxDetails>
      <Line />
      <BoxDetails>
        <Box width='calc(70% - 1rem)'>
          <Row>
            <Label>
              <SpanRadius checked={selectedPrice === 'week'} />
              <InputRadius
                type='radio'
                name='price'
                value='week'
                onChange={handleChangePrice}
              />
              <Span>Dia de Semana: {formatPrice(hotel.prices.week)}</Span>
            </Label>
            <Label>
              <SpanRadius checked={selectedPrice === 'weekend'} />
              <InputRadius
                type='radio'
                name='price'
                value='weekend'
                onChange={handleChangePrice}
              />
              <Span>Fim de Semana: {formatPrice(hotel.prices.weekend)}</Span>
            </Label>
          </Row>
          <Row>
            <Icon
              src={breakfastIcon}
              alt="ícone de café da manhã"
            />
            <Checkbox
              onClick={() => setBreakfast(!isBreakfast)}
              checked={isBreakfast}
              text='Café da manhã'
              disabled={hotel.breakfast}
            />
            <Label>{hotel.breakfast ? '- (Já incluso)' : '- (incluir por 10% da diária)'}</Label>
          </Row>
          <Row>
            <Icon
              src={tourIcon}
              alt="ícone de passeio"
            />
            <Checkbox
              onClick={() => setTour(!isTour)}
              checked={isTour}
              text='Passeio'
              disabled={hotel.tour}
            />
            <Label>{hotel.tour ? '- (Já incluso)' : '- (incluir por 20% da diária)'}</Label>
          </Row>
        </Box>
        <LineVert />
        <Box width='30%'>
          <Row>
            <Icon
              src={breakfastIcon}
              alt="ícone de café da manhã"
              hasMargin
            />
            <Span>
              {!hotel.breakfast && isBreakfast ? formatPrice(getBreakfastPrice()) : 'R$ 0,00'}
            </Span>
          </Row>
          <Row>
            <Icon
              src={tourIcon}
              alt="ícone de passeio"
              hasMargin
            />
            <Span>
              {!hotel.tour && isTour ? formatPrice(getTourPrice()) : 'R$ 0,00'}
            </Span>
          </Row>
          <Row>
            <Label>Total:</Label>
            <Span>
              {formatPrice(getTotalPrice())}
            </Span>
          </Row>
        </Box>
      </BoxDetails>
      <ReserveButton
        onClick={handleReserve}
        disabled={loading}
      >
        Confirmar Reserva
        {loading &&
          <LoadingIcon src={loadingIcon} alt='icone de carregamento' />
        }
      </ReserveButton>
    </Content>
  );
}
export default ReserveModal;
