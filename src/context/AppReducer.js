  
export default (state, action) => {
  switch (action.type) {
    case 'GET_PLAYERS':
      return {
        ...state,
        players: action.payload
      }
    case 'SET_TOP_FOUR_POINTS_PLAYERS':
      return {
        ...state,
        topFourPointsPlayers: action.topFourPointsPlayers
      }
    case 'GET_TEAM_POINTS_LEADER':
      return {
        ...state,
        teamPointsLeader: action.payload
      }
    case 'GET_TEAM_ASSISTS_LEADER':
      return {
        ...state,
        teamAssistsLeader: action.payload
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
        standings: action.payload
      }
    case 'GET_TEAM_IMG':
      return {
        ...state,
        teamImg: action.payload
      }
    case 'GET_ALL_TIME_LEADER':
      return {
        ...state,
        allTimeLeader: action.payload,
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