import React from 'react';
import { QuizFormContainer, QuizHeader, AnswerContainer } from './QuizFormStyles';

export const QuizForm = () => {
  return (
    <QuizFormContainer>
      <QuizForm>
        <QuizHeader>        
          <h2>Question #1:</h2>
          <h2>Which Timberwolves player currently holds the most points per game?</h2>
        </QuizHeader>
        <AnswerContainer>
          <button>A: D’Angelo Russell</button>
          <button>B: Anthony Edwards</button>
          <button>C: Karl-Anthony Towns</button>
          <button>D:  Ricky Rubio</button>
        </AnswerContainer>
      </QuizForm>
    </QuizFormContainer>
  )
};
