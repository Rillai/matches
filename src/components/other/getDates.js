import { getDate, getTommorowDate } from "./getDate"

export const getDates = (matches) => {
  const date = getDate()
  const tommorow = getTommorowDate()
  let dates = { today: 0, tomorrow: 0, all: matches.length }
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].time.slice(0, 10) === date) {
      dates.today += 1
    } else if (matches[i].time.slice(0, 10) === tommorow) {
      dates.tomorrow += 1
    }
  }
  return dates
}