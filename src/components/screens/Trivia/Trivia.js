import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { Quiz } from '../../Quiz/Quiz';
import { Container, Row, CountDown, TimberWolf } from '../Trivia/TriviaStyles';

// images and data
import timberwolf from '../../../images/wolves-logo.png';


export const Trivia = () => {
  // control which component to show
  const { state } = useContext(GlobalContext);
  const { showInfo, questions, currentQuestion } = state;
  const question = questions[currentQuestion];

  // countdown timer
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (!timeLeft) {
      return;
    };

  const interval = setInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearInterval(interval);
  }, [timeLeft]);
  
    return (
      <Container>
      <Row>
          <TimberWolf src={timberwolf} alt='Timberwolves logo' role='img' />
        </Row>
        
        <Row>
          <Quiz setTimeLeft={setTimeLeft} />
        </Row>

          <Row>
            <CountDown role='Countdown Timer'>
              {showInfo ?<span>{timeLeft}</span> : <span>{question.id}</span>}
            </CountDown> 
          </Row>
        
      </Container>
    )
};
