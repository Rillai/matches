import React, { useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { getCountries, getLeagues, getMatches } from "../../../redux/reducers/matches-reducer";
import { Aside } from "./aside";
import { MatchesTabs } from "./matchesTabs";
import { MatchesTable } from "./matchesTable";

export const Matches = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMatches())
    dispatch(getCountries())
    dispatch(getLeagues())
  });

  return (
    <main className='matches'>
      <Aside />
      <div>
        <MatchesTabs />
        <MatchesTable />
      </div>
    </main>
  );
};
