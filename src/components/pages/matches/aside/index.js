import React from "react";
import "./style.css";
import { Collapse } from "./collapse";
import { useSelector } from "react-redux";
import { countriesSelector, leaguesSelector } from "../../../../redux/selectors/matches-selectors";

export const Aside = () => {
  const countries = useSelector(countriesSelector)
  const leagues = useSelector(leaguesSelector)

  return (
    <aside className='aside'>
      <div className='my-leagues asside-block'>
        <h4>Мои лиги</h4>
        <hr className='asside-hr' />
        {leagues.map(league => <Collapse key={league.id} league={league} />)}
      </div>
      <div className='countries asside-block'>
        <h4>Страны</h4>
        <hr className='asside-hr' />
        <div className='scroll-y'>
          {countries.map(countries => <p key={countries.id}>{countries.country}</p>)}
        </div>
      </div>
    </aside>
  );
};
