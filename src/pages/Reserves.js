// Libs
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Images
import emptyIcon from '../assets/empty.png';
import CardPlaceholder from '../components/cards/CardPlaceholder';
import CardReserve from '../components/cards/CardReserve';

// Styles
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background: linear-gradient(0deg, var(--app-dark) -10%, var(--app-light) 100%);
  overflow-x: auto;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 3rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 3rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const EmptyIcon = styled.img`
  display: block;
  width: 7rem;
`;

const Title = styled.h3`
  font: 500 1.375rem 'Roboto', sans-serif;
  color: var(--app-white);
`;

const Reserves = () => {
  const [isLoading, setLoading] = useState(false);
  const [reservesList, setList] = useState([]);

  const getReserves = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/reserves');

      setList(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getReserves();
  }, []);

  const removeReserva = (id) => {
    const list = reservesList.filter(reserva => reserva.id !== id);
    setList(list);
  }

  const renderPlaceholder = () => {
    const placeholderList = [...Array(8)];

    return (
      <List>
        {placeholderList.map((item, index) => (
          <CardPlaceholder
            key={index}
            width='60%'
            height='15rem'
            margin='auto'
          />
        ))}
      </List>
    );
  };

  const renderEmpty = () => (
    <Box>
      <EmptyIcon src={emptyIcon} alt='ícone de vazio' />
      <Title>Você ainda não possui reserva</Title>
    </Box>
  );

  const renderList = () => {
    return (
      <Content>
        {reservesList.map(hotel => {
          return (
            <CardReserve
              key={hotel.id}
              item={hotel}
              removeReserva={removeReserva}
            />
          )
        })}
      </Content>
    )
  }

  const renderContent = () => {
    if (isLoading) return renderPlaceholder();
    
    if (reservesList.length === 0) return renderEmpty();;

    return renderList();
  }

  return (
    <Container>
      {renderContent()}
    </Container>
  );
}

export default Reserves;
