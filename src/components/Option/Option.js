import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Option = (props) => {
  let classes = ['answer'];

  const { state, dispatch } = useContext(GlobalContext);
  const { questions, currentQuestion } = state;
  const question = questions[currentQuestion];

  const handleClick = e => {
    props.dispatch({type: 'SET_CURRENT_ANSWER', currentAnswer: e.target.value});
    props.dispatch({type: 'SET_ERROR', error: ''});
  }

  if (props.selected) {
    classes.push('selected');
  }

  return (
    <>
      <button value={props.letter} onClick={handleClick} className={classes.join(' ')}>
        <span className="letter">{props.letter}: </span>
        {props.answer}
      </button>
    </>
  )
}