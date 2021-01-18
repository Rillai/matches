import React from "react";
import { useSelector } from "react-redux";
import { matchesSelector } from "../../../../redux/selectors/matches-selectors";
import "./style.css";

export const MatchesTable = () => {
  const matches = useSelector(matchesSelector)
  return (
    <div className='matchesTable'>
      <table>
        <tbody>
          {matches.length > 0 ? <tr className='flag'>
            <td><img alt='flag' src='assets/img/matches/flags/usa_flag.png' /></td>
            <td>Англия: Премьер-лига</td>
          </tr> : <tr></tr>}
          {matches.map(match => (
            <tr key={match.id}>
              <td>
                <span className='border-right-span'>
                {match.time.slice(11, 16)}
                </span>
              </td>
              <td>
                {match.name}
              </td>
              <td className='score'>
                {match.score}
              </td>
              <td className='border-right favorite'>
                {match.favorite === 0 ?
                  <img src='assets/img/matches/star1.png' alt='star' /> :
                  <img src='assets/img/matches/star2.png' alt='start' />}
              </td>
              <td className='border-right status'>
                {match.status}
              </td>
              <td className='more-information'>
                <a href={match.link}>Подробнее</a>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  )
}