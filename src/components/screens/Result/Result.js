import React from 'react';
import { ResultBox } from './ResultStyles';
import { StartButton as NextQuestion } from '../Main/MainStyles';

export const Result = ({ result, setAnswered, setResult, setTimeLeft }) => {
  
  const nextQuestion = () => {
    setAnswered(false);
    setResult(null);
    setTimeLeft(3);
    console.log('clicked');
  }

  return (
    <>
      <ResultBox result={result}>
        <h3>{result === true ? 'Correct!' : "Incorrect. Don't give up!"}</h3>
        
      </ResultBox>
      <NextQuestion onClick={nextQuestion}>Next</NextQuestion>
    </>
  )
}
