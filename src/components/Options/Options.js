import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Option } from '../Option/Option';

export const Options = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { currentAnswer, questions, currentQuestion } = state;
  const question = questions[currentQuestion];
  
  return (
    <>
      <Option letter='a' answer={question.answer_a} selected={currentAnswer === 'a'} dispatch={dispatch} />
      <Option letter='b' answer={question.answer_b} selected={currentAnswer === 'b'} dispatch={dispatch} />
      <Option letter='c' answer={question.answer_c} selected={currentAnswer === 'c'} dispatch={dispatch} />
      <Option letter='d' answer={question.answer_d} selected={currentAnswer === 'd'} dispatch={dispatch} />
    </>
  );
};
