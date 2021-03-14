import React from 'react';
import { Squares } from '../Main/MainStyles';
import { InfoContainer } from '../Info/InfoStyles';

export const Info = () => {
  return (
    <InfoContainer>
      <h2>Did you know...</h2>
      <h3>Karl-Anthony Towns currently averages 21.6 points per game!</h3>
      <Squares />
    </InfoContainer>
  )
}
