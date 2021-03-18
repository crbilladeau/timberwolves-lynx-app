import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Option } from '../Option/Option';

export const Options = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { currentAnswer, questions, currentQuestion } = state;
  const question = questions[currentQuestion];
  
  return (
    <>
      <Option letter='a' answer={question.answer_a} selected={currentAnswer === question.answer_a} dispatch={dispatch} />
      <Option letter='b' answer={question.answer_b} selected={currentAnswer === question.answer_b} dispatch={dispatch} />
      <Option letter='c' answer={question.answer_c} selected={currentAnswer === question.answer_c} dispatch={dispatch} />
      <Option letter='d' answer={question.answer_d} selected={currentAnswer === question.answer_d} dispatch={dispatch} />
    </>
  );
};
