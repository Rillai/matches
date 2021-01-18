import { SET_MATCHES, SET_COUNTRIES, SET_LEAGUES, SET_DATES, SET_FILTER_MODE } from '../types/matches-types';

export const setMatches = (data) => ({ type: SET_MATCHES, data })
export const setCountries = (data) => ({ type: SET_COUNTRIES, data })
export const setLeagues = (data) => ({ type: SET_LEAGUES, data })
export const setDates = (sum) => ({ type: SET_DATES, sum })
export const setFilterMode = (mode) => ({ type: SET_FILTER_MODE, mode })