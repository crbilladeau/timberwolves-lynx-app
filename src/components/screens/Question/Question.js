import React, { useState } from 'react';
import { questions } from '../../../data/questions';

const question = 'Yes';

export const Question = () => {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState({});

  const onAnswerClicked = answer => {
    setAnswered(true);
    setSelected(answer);
  };

  const isCorrectAnswer = answer => {
    return answer === question.answer;
  }

  return (
    <>

    </>
  )
}
