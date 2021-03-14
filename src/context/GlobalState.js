import React, { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
require('dotenv').config();

// axios
const baseURL = 'https://api.nba.net/2';

const dataAPI = 'http://data.nba.com/data/10s/v2015/'

let options = {
    headers: {
      'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'
  }
};

// initial state
const initialState = {
  players: [],
  loading: true,
}

// begin game state


// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
// actions

// start game
async function beginGame() {

}


async function getPlayers() {
  try {
    dispatch({
      type: 'GET_PLAYERS_REQUEST',
    });
    const response = await Promise.all([
      axios.get(
        `${baseURL}/timberwolves/article/?count=50`, options
      ),

      ]).then((response) => {
        // console.log(response);
        dispatch({
          type: 'GET_PLAYERS',
          payload: response,
        });
      });
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        players: state.players,
        loading: state.loading,
        getPlayers
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};