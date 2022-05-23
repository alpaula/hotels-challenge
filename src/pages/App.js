// Libs
import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Components
import Header from '../components/Header';

// Styles
const Container = styled.div`
  width: 100%;
  min-height: 150vh;
  background: linear-gradient(0deg, var(--app-light) -10%, var(--app-light-transparent) 100%);;
`;

const App = () => {
  const getHotels = async () => {
    try {
      const response = await axios.get('/hotels');
      console.log(response);

     } catch (err) {
      console.log('error: ', err);
    }
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
