import { matchesAPI } from '../../api';
import { getDates } from '../../components/other/getDates';
import { setCountries, setDates, setLeagues, setMatches } from '../actions/matches-actions';
import { SET_MATCHES, SET_COUNTRIES, SET_LEAGUES, SET_DATES, SET_FILTER_MODE } from '../types/matches-types';

const initialState = {
    matches: [],
    filterMode: 1,
    dates: {},
    countries: [],
    leagues: [],
};

const handlersPage = {
    [SET_MATCHES]: (state, action) =>
        ({ ...state, matches: action.data }),
    [SET_COUNTRIES]: (state, action) =>
        ({ ...state, countries: action.data }),
    [SET_LEAGUES]: (state, action) =>
        ({ ...state, leagues: action.data }),
    [SET_DATES]: (state, action) =>
        ({ ...state, dates: action.sum }),
    [SET_FILTER_MODE]: (state, action) =>
        ({ ...state, filterMode: action.mode })
};


export const MatchesReducer = (state = initialState, action) => {
    if (handlersPage[action.type]) {
        return handlersPage[action.type](state, action);
    }
    return state
};

export const getMatches = () => {
    return (dispatch) => {
        matchesAPI.getMatches()
            .then(data => {
                dispatch(setMatches(data));
                dispatch(setDates(getDates(data)))

            });
    }
}

export const getCountries = () => {
    return (dispatch) => {
        matchesAPI.getCountries()
            .then(data => {
                dispatch(setCountries(data));
            });
    }
}

export const getLeagues = () => {
    return (dispatch) => {
        matchesAPI.getMyLeagues()
            .then(data => {
                dispatch(setLeagues(data));
            });
    }
}