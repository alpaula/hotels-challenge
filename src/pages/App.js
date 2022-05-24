// Libs
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

// Utils
import {
  getBreakfastList,
  getTourAndBreakfastList,
  getTourList
} from '../utils/utils';

// Components
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import Card from '../components/Card';
import CardPlaceholder from '../components/CardPlaceholder';

// Styles
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background: linear-gradient(0deg, var(--app-dark) -10%, var(--app-light) 100%);
  overflow-x: auto;
`;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 3rem;
`;

const App = () => {
  const [hotelsList, setList] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isBreakfast, setBreakfast] = useState(false);
  const [isTour, setTour] = useState(false);

  const getHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/hotels');

      setList(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHotels();
  }, []);

  const filterHotelsList = () => {
    if (isBreakfast && isTour) return getTourAndBreakfastList(hotelsList);
    if (isBreakfast) return getBreakfastList(hotelsList);
    if (isTour) return getTourList(hotelsList);

    return hotelsList;
  }

  const renderPlaceholder = () => {
    const placeholderList = [...Array(8)];

    return (
      <Content>
        {placeholderList.map((item, index) => (
          <CardPlaceholder
            key={index}
          />
        ))}
      </Content>
    );
  };

  const renderContent = () => {
    if (isLoading) return renderPlaceholder();

    return (
      <Content>
        {filterHotelsList().map(hotel => (
          <Card
            key={hotel.id}
            item={hotel}
          />
        ))}
      </Content>
    )
  }

  return (
    <Fragment>
      <Header />
      <Container>
        <ActionBar
          isBreakfast={isBreakfast}
          setBreakfast={setBreakfast}
          isTour={isTour}
          setTour={setTour}
        />
        {renderContent()}
      </Container>
    </Fragment>
  );
}

export default App;
