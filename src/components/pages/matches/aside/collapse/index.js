import React, { useState } from "react";
import "./style.css";

export const Collapse = (props) => {
  const [isShow, setisShow] = useState(false);
  const toggleFIeldset = () => setisShow(!isShow);
  const myLeagues = props.league
  return (
    <div key={myLeagues.id} className={isShow ? 'active' : ''}>

      <p className="btn-collapse" onClick={toggleFIeldset}>
        {myLeagues.league}
      </p>

      <div className="collapse-list">
        {myLeagues.items.map(league =>
          <div key={league.id} className='flex-between'>
            <p>{league.item}</p>
            <span>✖</span>
          </div>)}
      </div>
    </div>
  );
};