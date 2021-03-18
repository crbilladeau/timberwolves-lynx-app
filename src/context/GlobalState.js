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
  topFourPointsPlayers: {},
  teamPointsLeader: {
    name: '',
    points: 0,
    position: ''
  },
  teamAssistsLeader: {
    name: '',
    assists: 0,
    position: ''
  },
  standings: '',
  teamImg: '',
  teamPointsLeaderImg: '',
  allTimeLeader: {},
  allTimeLeaderImg: '',
  teamAssistsLeaderImg: '',
  questions: [
    {
      id: 1,
      question: 'Which Timberwolves player currently has the most average points per game?',
      answer_a: 'Ricky Rubio',
      answer_b: "D'Angelo Russell",
      answer_c: 'Jordan McLaughlin',
      answer_d: '',
      correct_answer: '',
    },
    {
      id: 2,
      question: "What is the Timberwolves current win-loss conference record?",
      answer_a: '12 - 26',
      answer_b: '',
      answer_c: '28 - 10',
      answer_d: '10 - 18',
      correct_answer: '',
    },
    {
      id: 3,
      question: "Which former Timberwolves player holds the team's all-time career record for steals?",
      answer_a: '',
      answer_b: "Wally Szczerbiak",
      answer_c: 'Kevin Love',
      answer_d: 'Tom Gugliotta',
      correct_answer: '',
    },
    {
      id: 4,
      question: 'Which Timberwolves player currently has the most assists per game?',
      answer_a: '',
      answer_b: "D'Angelo Russell",
      answer_c: 'Jordan McLaughlin',
      answer_d: 'Karl-Anthony Towns',
      correct_answer: ''
    },
    {
      id: 5,
      question: 'What position does Anthony Edwards play?',
      answer_a: 'G-F',
      answer_b: "C-F",
      answer_c: '',
      answer_d: 'F',
      correct_answer: '',
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
async function getPlayerInfo() {
  try {
    const response = await axios.get(
        `${baseStatsURL}/nba/2020/players/playercard_1630162_02.json`
      ).then((response) => {
        dispatch({
          type: 'GET_EDWARDS_INFO',
          payload: response.data.pl.pos
        })
        console.log(response.data.pl.pos);
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
        // console.log(`${response[0]['data']['tle']['pts']['fn']} ${response[0]['data']['tle']['pts']['ln']}`)
        dispatch({
          type: 'GET_TEAM_ASSISTS_LEADER',
          payload: response[0]['data']['tle']['ast']
        });
        // console.log(response[0]['data']['tle']['ast'])
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
        payload: response[0]['data']['sta']['co'][1]['di'][0]['t'][4]
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
    // console.log(response[0]['data']['atl']['tot']['pl'][17]);
  } catch (err) {
    dispatch({
      type: 'FETCH_ERROR',
      payload: err.response.data.error,
    });
  }
}

  useEffect(() => {
    getPlayerInfo();
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