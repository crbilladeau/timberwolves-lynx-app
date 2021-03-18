import { update } from 'immutability-helper';
let index = 0;
export default (state, action) => {
  switch (action.type) {
    case 'GET_EDWARDS_INFO':
      return {
        ...state,
        questions: state.questions.map(
          (question, i) => i === 4 ? {...question, answer_c: action.payload, correct_answer: action.payload} : question
      ),
      }
    case 'SET_TOP_FOUR_POINTS_PLAYERS':
      return {
        ...state,
        topFourPointsPlayers: action.topFourPointsPlayers
      }
    case 'GET_TEAM_POINTS_LEADER':
      return { 
        ...state, 
        questions: state.questions.map(
            (question, i) => i === 0 ? {...question, answer_d: `${action.payload.fn} ${action.payload.ln}`, correct_answer: `${action.payload.fn} ${action.payload.ln}`} : question
        ),
        teamPointsLeader: {
          ...state.teamPointsLeader,
          name: `${action.payload.fn} ${action.payload.ln}`,
          points: action.payload.val,
          position: action.payload.pos
        }
     }
    case 'GET_TEAM_ASSISTS_LEADER':
      return { 
        ...state, 
        questions: state.questions.map(
            (question, i) => i === 3 ? {...question, answer_a: `${action.payload.fn} ${action.payload.ln}`, correct_answer: `${action.payload.fn} ${action.payload.ln}`} : question
        ),
        teamAssistsLeader: {
          ...state.teamAssistsLeader,
          name: `${action.payload.fn} ${action.payload.ln}`,
          assists: action.payload.val,
          position: action.payload.pos
        }
     }
    case 'GET_TEAM_POINTS_LEADER_IMG':
      return {
        ...state,
        teamPointsLeaderImg: action.payload
      }
    case 'GET_TEAM_ASSISTS_LEADER_IMG':
      return {
        ...state,
        teamAssistsLeaderImg: action.payload
      }
    case 'GET_TIMB_STANDINGS':
      return {
        ...state,
          questions: state.questions.map(
              (question, i) => i === 1 ? {...question, answer_b: `${action.payload.w} - ${action.payload.l}`, correct_answer: `${action.payload.w} - ${action.payload.l}`} : question
          ),
        standings: `${action.payload.w} - ${action.payload.l}`
      }
    case 'GET_TEAM_IMG':
      return {
        ...state,
        teamImg: action.payload
      }
    case 'GET_ALL_TIME_LEADER':
      return {
        ...state,
        questions: state.questions.map(
          (question, i) => i === 2 ? {...question, answer_a: `${action.payload.fn} ${action.payload.ln}`, correct_answer: `${action.payload.fn} ${action.payload.ln}`} : question
      ),
      allTimeLeader: {
        ...state.allTimeLeader,
        name: `${action.payload.fn} ${action.payload.ln}`,
        steals: action.payload.stl
      },
        loading: false
      }
    case 'GET_ALL_TIME_LEADER_IMG':
      return {
        ...state,
        allTimeLeaderImg: action.payload
      }

    // QUIZ REDUCERS
    case 'SET_CURRENT_ANSWER':
      return {
        ...state,
        currentAnswer: action.currentAnswer
      }
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.currentQuestion
      }
    case 'SET_ANSWERS':
      return {
        ...state,
        answers: action.answers,
        answered: action.answered
      }
    case 'SET_SHOW_INFO':
      return {
        ...state,
        showInfo: action.showInfo,
      }
    case 'SET_SHOW_RESULTS':
      return {
        ...state,
        showResults: action.showResults
      }
    case 'SET_ERROR':
      return {
          ...state,
          error: action.error,
      };
    default:
      return state;
  }
};