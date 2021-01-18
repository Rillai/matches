import { getDate, getTommorowDate } from "../../components/other/getDate"

export const matchesSelector = (state) => {
    const today = getDate()
    const tommorow = getTommorowDate()
    const mode = state.matchesPage.filterMode
    if (mode === 1) {
        return state.matchesPage.matches.filter(match => match.time.slice(0, 10) === today)
    } else if (mode === 2) {
        return state.matchesPage.matches.filter(match => match.time.slice(0, 10) === tommorow)
    } else {
        return state.matchesPage.matches
    }
}

export const countriesSelector = (state) => {
    return state.matchesPage.countries
}

export const leaguesSelector = (state) => {
    return state.matchesPage.leagues
}