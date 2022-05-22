// Libs
import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div``;

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
      Olá!
    </Container>
  );
}

export default App;
