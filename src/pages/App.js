// Libs
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

// Utils
import {
  getBreakfastList,
  getTourAndBreakfastList,
  getTourList,
  orderLowerClassificationList,
  orderBiggerClassificationList,
  orderLowerValueList,
  orderBiggerValueList
} from '../utils/utils';

// Components
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import Card from '../components/Card';
import CardPlaceholder from '../components/CardPlaceholder';
import ReserveModal from '../components/modals/ReserveModal';
import Modals from '../components/modals/Modals';
import ConfirmReserveModal from '../components/modals/ConfirmReserveModal';

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

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const App = () => {
  const [hotelsList, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isBreakfast, setBreakfast] = useState(false);
  const [isTour, setTour] = useState(false);
  const [modal, setModal] = useState({ type: '', isOpen: false });
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isOrder, setOrder] = useState('biggerClassification');

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

  const handleCloseModal = () => {
    setModal({
      type: '',
      isOpen: false
    });
    setSelectedHotel(null);
  }

  const orderHotelsList = (list) => {
    if (isOrder === 'lowerClassification') return orderLowerClassificationList(list);
    if (isOrder === 'biggerClassification') return orderBiggerClassificationList(list);
    if (isOrder === 'lowerValue') return orderLowerValueList(list);
    if (isOrder === 'biggerValue') return orderBiggerValueList(list);
  }

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
        {orderHotelsList(filterHotelsList()).map(hotel => {
          const handleSelectedHotel = () => {
            setSelectedHotel(hotel);
            setModal({
              type: 'reserve',
              isOpen: true
            });
          }

          return (
            <Card
              key={hotel.id}
              item={hotel}
              handleSelectedHotel={handleSelectedHotel}
            />
          )
        })}
      </Content>
    )
  }

  const renderModal = () => {
    if (modal.type === 'reserve') {
      return (
        <ReserveModal
          setModal={setModal}
          hotel={selectedHotel}
          handleCloseModal={handleCloseModal}
        />
      );
    }

    if (modal.type === 'confirm-reserve') {
      return (
        <ConfirmReserveModal
          handleCloseModal={handleCloseModal}
        />
      );
    }
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
          isOrder={isOrder}
          setOrder={setOrder}
        />
        {renderContent()}
      </Container>
      {modal.isOpen &&
        <Modals handleCloseModal={handleCloseModal}>
          {renderModal()}
        </Modals>}
    </Fragment>
  );
}

export default App;
