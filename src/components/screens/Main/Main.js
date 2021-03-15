import React, { useState } from 'react';
import { Trivia } from '../Trivia/Trivia';
import { Container, Row, StartButton, PlayerImage, Brush, SquareNavy, SquareGreen } from '../Main/MainStyles';

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
            <Brush 
              role='img' 
              aria-label='Timberwolves Trivia' 
              initial='out'
              animate='in'
              exit='out'
              variants={brushVariants}
              transition={imgTransition}
            />
            <h1>Timberwolves Trivia</h1>
            <h3>Answer 1 question correctly and get $1 off your next soda purchase at any Target Center concessions stand! Shoot 5 for 5 and receive a FREE drink of your choice!*</h3>
            <StartButton 
              onClick={beginGame} 
              role='button' 
              aria-label='Press to Start Trivia Game'
            >
              Play
            </StartButton>
            <p>*Terms and conditions apply.</p>
          </Row>
          <Row>
            <SquareGreen 
              role='img' 
              aria-label='Green Square' 
              initial='out'
              animate='in'
              exit='out'
              variants={squareVariants}
              transition={imgTransition}
            />
            <SquareNavy 
              role='img' 
              aria-label='Green Square' 
              initial='out'
              animate='in'
              exit='out'
              variants={squareVariants}
              transition={imgTransition}
            />
            <PlayerImage         
              initial='out'
              animate='in'
              exit='out'
              variants={imgVariants}
              transition={imgTransition}
              src={katBig} 
              alt='Karl-Anthony Towns' 
              role='img' 
            />
          </Row>
        </main>
        
    </Container>
  )
};

// framer motion variants and transitions
const imgVariants = {
  in: {
    y: 0
  },
  out: {
    y: 200
  },
};

const squareVariants = {
  in: {
    x: 0
  },
  out: {
    x: 100
  },
};

const brushVariants = {
  in: {
    x: 0
  },
  out: {
    x: -200
  },
};

const imgTransition = {
  duration: 1.2,
  ease: 'easeIn',
};
