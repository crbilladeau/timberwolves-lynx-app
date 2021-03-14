import React from 'react';
import { QuizContainer, QuizHeader, AnswerContainer } from './QuizStyles';
import { QuestionHeader, Question } from '../Question/QuestionStyles';

export const Quiz = () => {
  return (
    <QuizContainer>
        <QuizHeader>        
          <QuestionHeader>Question #1:</QuestionHeader>
          <Question>Which Timberwolves player currently holds the most points per game?</Question>
        </QuizHeader>
        <AnswerContainer>
          <button>A: D’Angelo Russell</button>
          <button>B: Anthony Edwards</button>
          <button>C: Karl-Anthony Towns</button>
          <button>D:  Ricky Rubio</button>
        </AnswerContainer>
    </QuizContainer>
  )
};
