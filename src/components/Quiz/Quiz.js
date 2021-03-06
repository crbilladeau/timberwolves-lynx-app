import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { GlobalContext } from '../../context/GlobalState';
import { QuizContainer, QuizHeader, AnswerContainer } from './QuizStyles';
import { Question } from '../Question/Question';
import { Options } from '../Options/Options';

export const Quiz = ({ setTimeLeft, timeLeft }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { questions, currentQuestion, currentAnswer, answers, showResults, players, teamPointsLeader, teamPointsLeaderImg, topFourPointsPlayers, showInfo, standings, teamImg, allTimeLeader, allTimeLeaderImg, teamAssistsLeader, teamAssistsLeaderImg, error } = state;
  const question = questions[currentQuestion];

  let totalPoints = 0;
  // check final answer
  const showResultScore = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      totalPoints++;
      return <span className="correct">Correct!</span>
    }
    return <span className="incorrect">Incorrect</span>
  }

    // show results data
  const showResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(question => question.id === answer.questionId);
      return (
        <li key={question.id}>
          {question.id}. {question.question} - {showResultScore(question, answer)}
        </li>
      )
    });
  }

  const showTotalPoints = () => {
    return (
      totalPoints < 1 ? 
      <h3>Sorry, looks like you missed your shots this time.</h3> 
      : totalPoints > 1 && totalPoints < 5 
      ? <div><h3>Congrats! You won $1 off your next soda.</h3><button className='submit'>CLAIM</button></div> 
      : totalPoints === 5 ? <div><h3>You went 5 for 5! Congrats! Your next drink's on us.</h3><button className='submit'>CLAIM</button></div> 
      : null
    )
  }

  const handleError = () => {
    if(!error) {
      return;
    }
    return <div className="error">{error}</div>
  }

  const nextQuestion = () => {
    const answer = {questionId: question.id, answer: currentAnswer};

    if (!currentAnswer) {
      dispatch({type: 'SET_ERROR', error: 'Please select an option'});
      return;
  }

    answers.push(answer);
    dispatch({type: 'SET_ANSWERS', answers});
    dispatch({type: 'SET_CURRENT_ANSWER', currentAnswer: ''});
    
    if (currentQuestion + 1 < questions.length) {
      dispatch({type: 'SET_SHOW_INFO', showInfo: true });
      setTimeLeft(5);
      setTimeout(() => {
        dispatch({type: 'SET_SHOW_INFO', showInfo: false });
        setTimeLeft(10);
      }, 5000)
    } 
    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: 'SET_CURRENT_QUESTION',
        currentQuestion: currentQuestion + 1,
      });
      return;
    }
    dispatch({type: 'SET_SHOW_RESULTS', showResults: true});
  };

if (showInfo && currentQuestion === 1) {
  return (
    <div className='info-container'>
      <motion.div 
        className='text-container'
        initial='out'
        animate='in'
        exit='out'
        variants={textVariants}
        transition={imgTransition} 
      >
        <h1>Did you know...</h1>
        <h2>{teamPointsLeader.name} currently averages {teamPointsLeader.points} points per game!</h2>
      </motion.div>
      <motion.img               
        initial='out'
        animate='in'
        exit='out'
        variants={imgVariants}
        transition={imgTransition} 
        src={teamPointsLeaderImg} 
        alt={`${teamPointsLeader.name}`} />
    </div>
  )
}
else if (showInfo && currentQuestion === 2) {
  return (
    <div className='info-container'>
      <motion.div className='text-container'        
        initial='out'
        animate='in'
        exit='out'
        variants={textVariants}
        transition={imgTransition}  
      > 
        <h1>Did you know...</h1>
        <h2>The Timberwolves are currently {standings} in the last ten games.</h2>
      </motion.div>
      <motion.img               
        initial='out'
        animate='in'
        exit='out'
        variants={imgVariants}
        transition={imgTransition} 
        src={teamImg.listImage.landscape} 
        alt={teamImg.brand} />
    </div>
  )
}

else if (showInfo && currentQuestion === 3) {
  return (
    <div className='info-container'>
      <motion.div 
        className='text-container'        
        initial='out'
        animate='in'
        exit='out'
        variants={textVariants}
        transition={imgTransition} 
      >      
        <h1>Did you know...</h1>
        <h2>{allTimeLeader.name} is ranked in the top 20 all-time players for his {allTimeLeader.steals} career steals!</h2>
      </motion.div>
      <motion.img               
        initial='out'
        animate='in'
        exit='out'
        variants={imgVariants}
        transition={imgTransition} 
        src={allTimeLeaderImg} 
        alt={`${allTimeLeader.fn} ${allTimeLeader.ln}`} />
    </div>
  )
}

else if (showInfo && currentQuestion === 4) {
  if (teamAssistsLeader.position === 'G') {
    teamAssistsLeader.position = 'Guard'
  } 
  if (teamAssistsLeader.position === 'G-F') {
    teamAssistsLeader.position = 'Forward-Guard'
  } 
  if (teamAssistsLeader.position === 'C') {
    teamAssistsLeader.position = 'Center'
  } 
  if (teamAssistsLeader.position === 'C-F') {
    teamAssistsLeader.position = 'Forward-Center'
  } 
  return (
    <div className='info-container'>
      <motion.div 
        className='text-container'        
        initial='out'
        animate='in'
        exit='out'
        variants={textVariants}
        transition={imgTransition} 
      > 
        <h1>Did you know...</h1>
        <h2>{teamAssistsLeader.name} averages {teamAssistsLeader.assists} assists per game in his position as a Timberwolves {teamAssistsLeader.position}!</h2>
      </motion.div>
      <motion.img               
        initial='out'
        animate='in'
        exit='out'
        variants={imgVariants}
        transition={imgTransition} 
        src={teamAssistsLeaderImg} 
        alt={`${teamAssistsLeader}`} />
    </div>
  )
}

else if (showResults) {
  setTimeLeft(0);
  return (
    <div className="results-container">
      <h2>Your Results</h2>
      <ul>{showResultsData()}</ul>
      <div>{showTotalPoints()}</div>
    </div>
  )
} else {
    return (
      <QuizContainer>
          <QuizHeader>
            <Question />
            {handleError()}
          </QuizHeader>
          <AnswerContainer>
            <Options />
          </AnswerContainer>
          <button className="submit" onClick={nextQuestion}>Submit</button>
      </QuizContainer>
    )
  }
};

// framer motion variants and transitions
const imgVariants = {
  in: {
    y: 0,
    x: 0
  },
  out: {
    y: 100,
    x: 100
  },
};

const textVariants = {
  in: {
    y: 0,
    x: 0
  },
  out: {
    y: -100,
    x: -100
  },
};

const imgTransition = {
  duration: 1,
  ease: 'easeIn',
};