import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { QuestionHeader, QuestionText } from '../Question/QuestionStyles';

export const Question = () => {
  const { state } = useContext(GlobalContext);
  const { questions, currentQuestion } = state;
  const question = questions[currentQuestion];

  return (
    <>
      <QuestionHeader>Question #{question.id}</QuestionHeader>
      <QuestionText>{question.question}</QuestionText>
    </>
  )
}
