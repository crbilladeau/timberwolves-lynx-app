import React, { useState, useEffect } from 'react';
import { Quiz } from '../Quiz/Quiz';
import { Result } from '../Result/Result';
import { Info } from '../Info/Info';
import { Container, Row, CountDown, TimberWolf } from '../Trivia/TriviaStyles';

// images
import timberwolf from '../../../images/wolves-logo.png'


export const Trivia = () => {
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (!timeLeft) {
      setAnswered(true);
      setResult(false);
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
        <TimberWolf src={timberwolf} />
      </Row>
      
      <Row>
        {answered ? <Result result={result} setAnswered={setAnswered} setResult={setResult} setTimeLeft={setTimeLeft} /> : <Quiz />}
      </Row>

      <Row>
        <CountDown>
          <span>{timeLeft}</span>
        </CountDown>
        {/* <Info /> */}
      </Row>
    </Container>
  )
};
