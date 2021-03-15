import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
require('dotenv').config();

// axios
const baseContentURL = 'https://api.nba.net/2';

const baseStatsURL = 'https://data.nba.com/data/10s/v2015/json/mobile_teams';

let options = {
    headers: {
      'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'
  }
};

// initial state
const initialState = {
  correct_answer: '',
  players: {},
  topFourPointsPlayers: {},
  teamPointsLeader: {},
  teamPointsLeaderImg: '',
  standings: '',
  teamImg: '',
  allTimeLeader: {},
  allTimeLeaderImg: '',
  teamAssistsLeader: {},
  teamAssistsLeaderImg: '',
  playerInfo: {},
  questions: [
    {
      id: 1,
      question: 'Which Timberwolves player currently has the most average points per game?',
      answer_a: 'Ricky Rubio',
      answer_b: "D'Angelo Russell",
      answer_c: 'Jordan McLaughlin',
      answer_d: 'Karl-Anthony Towns',
      correct_answer: 'd',
    },
    {
      id: 2,
      question: "What is the Timberwolves current win-loss record?",
      answer_a: '12 - 26',
      answer_b: '9 - 30',
      answer_c: '28 - 10',
      answer_d: '10 - 18',
      correct_answer: 'b',
    },
    {
      id: 3,
      question: "Which former Timberwolves player holds the team's all-time career record for steals?",
      answer_a: 'Kevin Garnett',
      answer_b: "Wally Szczerbiak",
      answer_c: 'Kevin Love',
      answer_d: 'Tom Gugliotta',
      correct_answer: 'a',
    },
    {
      id: 4,
      question: 'Which Timberwolves player currently has the most assists per game?',
      answer_a: 'Ricky Rubio',
      answer_b: "D'Angelo Russell",
      answer_c: 'Jordan McLaughlin',
      answer_d: 'Karl-Anthony Towns',
      correct_answer: 'a',
    },
    {
      id: 5,
      question: 'What position does Anthony Edwards play?',
      answer_a: 'G-F',
      answer_b: "C-F",
      answer_c: 'G',
      answer_d: 'F',
      correct_answer: 'c',
    },
  ],
  currentQuestion: 0,
  currentAnswer: '',
  answers: [],
  answered: false,
  showInfo: false,
  showResults: false,
  loading: true,
  error: '',
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

// API specific actions
async function getPlayerAverages() {
  try {
    const response = await axios.get(
        `${baseStatsURL}/nba/2020/teams/timberwolves/player_averages_02.json`
      ).then((response) => {
        // console.log(response);
        dispatch({
          type: 'GET_PLAYERS',
          payload: response.data.tpsts.pl
        })
        // console.log(response.data.tpsts.pl);
      });
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

async function getTeamLeaders() {
  try {

    const response = await Promise.all([
      axios.get(
        `${baseStatsURL}/nba/2020/teams/statistics/timberwolves/leaders_02.json`
      ),
      axios.get(
        `${baseContentURL}/timberwolves,league/article/?headline=Karl-Anthony%20Towns%20`, options
      ),
      axios.get(
        `${baseContentURL}/timberwolves,league/video/?headline=Ricky%20Rubio%20`, options
      ),
    ])
        dispatch({
          type: 'GET_TEAM_POINTS_LEADER',
          payload: response[0]['data']['tle']['pts']
        });
        // console.log(response[0]['data']['tle']['pts'])
        dispatch({
          type: 'GET_TEAM_ASSISTS_LEADER',
          payload: response[0]['data']['tle']['ast']
        });
        dispatch({
          type: 'GET_TEAM_POINTS_LEADER_IMG',
          payload: response[1]['data']['response']['result'][0]['listImage']['landscape']
        })
        dispatch({
          type: 'GET_TEAM_ASSISTS_LEADER_IMG',
          payload: response[2]['data']['response']['result'][0]['listImage']['landscape']
        })
        // console.log(response);
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

async function getStandings() {
  try {

    const response = await Promise.all([
      axios.get(
        `${baseStatsURL}/nba/2020/00_standings.json`
      ),
      axios.get(
        `${baseContentURL}/timberwolves,league/gallery/?count=5`, options
      ),
    ])
      dispatch({
        type: 'GET_TIMB_STANDINGS',
        payload: response[0]['data']['sta']['co'][1]['di'][0]['t'][4]['l10']
      });
      // console.log(response[0]['data']['sta']['co'][1]['di'][0]['t'][4]);
      dispatch({
        type: 'GET_TEAM_IMG',
        payload: response[1]['data']['response']['result'][0]
      });
      // console.log(response);
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

async function getAllTimeLeader() {
  try {
    const response = await Promise.all([
      axios.get(
        `${baseStatsURL}/nba/2020/league/stats/00_alltime_leaders_steals_02.json`
      ),
      axios.get(
        `${baseContentURL}/timberwolves,league/video/?headline=Kevin%20Garnett%20`, options
      ),
    ])
    dispatch({
      type: 'GET_ALL_TIME_LEADER',
      payload: response[0]['data']['atl']['tot']['pl'][17]
    });
    dispatch({
      type: 'GET_ALL_TIME_LEADER_IMG',
      payload: response[1]['data']['response']['result'][0]['listImage']['landscape']
    });
    // console.log(response);
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

  useEffect(() => {
    getPlayerAverages();
    getTeamLeaders();
    getStandings();
    getAllTimeLeader();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  )
};