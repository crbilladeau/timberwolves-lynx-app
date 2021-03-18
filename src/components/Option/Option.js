import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Option = ({ letter, answer, selected }) => {
  let classes = ['answer'];

  const { state, dispatch } = useContext(GlobalContext);
  const { questions, currentQuestion } = state;
  const question = questions[currentQuestion];

  const handleClick = e => {
    dispatch({type: 'SET_CURRENT_ANSWER', currentAnswer: e.target.value});
    dispatch({type: 'SET_ERROR', error: ''});
  }

  if (selected) {
    classes.push('selected');
  }

  return (
    <>
      <button value={answer} onClick={handleClick} className={classes.join(' ')}>
        <span className="letter">{letter}: </span>
        {answer}
      </button>
    </>
  )
}