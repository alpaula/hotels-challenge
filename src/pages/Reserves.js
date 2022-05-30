// Libs
import React, { Fragment } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background: linear-gradient(0deg, var(--app-dark) -10%, var(--app-light) 100%);
  overflow-x: auto;
`;

const Reserves = () => {

  return (
    <Fragment>
      <Container>
        Reservas
      </Container>
    </Fragment>
  );
}

export default Reserves;
