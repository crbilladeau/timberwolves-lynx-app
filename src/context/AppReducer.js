  
export default (state, action) => {
  switch (action.type) {
    case 'GET_PLAYERS_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_PLAYERS':
      return {
        ...state,
        loading: false,
        players: action.payload[0],
      }

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload[0],
      };

    default:
      return state;
  }
};