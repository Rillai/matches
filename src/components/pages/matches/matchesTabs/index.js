import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterMode } from "../../../../redux/actions/matches-actions";
import "./style.css";

export const MatchesTabs = () => {
  const dates = useSelector(state => state.matchesPage.dates)
  const [button, setbutton] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFilterMode(button))
  }, [button, dispatch])
  return (
    <div className='matchesTabs'>
      <div className='button-container'>
        <button className={button === 1 ? 'active' : ''} onClick={() => setbutton(1)}>
          Сегодня<span>{dates.today}</span>
        </button>
        <button className={button === 2 ? 'active' : ''} onClick={() => setbutton(2)}>
          Завтра<span>{dates.tomorrow}</span>
        </button>
        <button className={button === 3 ? 'active' : ''} onClick={() => setbutton(3)}>
          Все&nbsp;матчи<span>{dates.all}</span>
        </button>
      </div>
      <div className='filterByCalendar'>
        <img src='assets/img/matches/calendar.png' alt='calendar' />
        <p>21.03 вт</p>
      </div>
    </div>
  )
};
