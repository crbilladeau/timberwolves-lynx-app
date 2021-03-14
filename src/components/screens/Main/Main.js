import React, { useState } from 'react';
import { Trivia } from '../Trivia/Trivia';
import { Container, Row, StartButton, PlayerImage, Brush, Squares } from '../Main/MainStyles';

// images
import katBig from '../../../images/kat-wolves.png';

export const Main = () => {
  const [gameStart, setGameStart] = useState(false);

  const beginGame = () => {
    setGameStart(true);
  }

  return (
    gameStart ? <Trivia /> :
    <Container>
        <main>
          <Row>
            <Brush role="img" aria-label='Timberwolves Trivia' />
            <h3>Get 5 questions correct and win $1 off your next drink purchase at any Target Center concessions stand!*</h3>
            <StartButton onClick={beginGame}>Play</StartButton>
            <p>*Terms and conditions apply.</p>
          </Row>
          <Row>
            <Squares role="img" aria-label='Green and Navy Squares' />
            <PlayerImage src={katBig} alt='Karl-Anthony Towns' />
          </Row>
        </main>
        
    </Container>
  )
};
