// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import starIcon from '../assets/star.png';

// Styles
const StarList = styled.div``;

const Icon = styled.img`
  width: ${props => props.width};
  margin-right: .25rem;
  filter: drop-shadow(1px 1px 1px var(--app-dark));
`;

const Stars = ({
  classification,
  width
}) => {
  const getStars = () => {
    const starsList = [];

    for (let i = 0; i < classification; i++) {
      starsList.push(
        <Icon
          key={i}
          src={starIcon}
          alt='ícone estrela'
          width={width}
        />
      )
    }

    return starsList;
  }

  return (
    <StarList>{getStars()}</StarList>
  );
}

export default Stars;
