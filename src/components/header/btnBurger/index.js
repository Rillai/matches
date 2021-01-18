import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const BtnBurger = () => {
  const [isShow, setisShow] = useState(false);
  const toggleFIeldset = () => setisShow(!isShow);
  return (
    <div className='btn-container'>
      <button className="btn-burger" onClick={toggleFIeldset}>
        <span />
      </button>

      <div className={isShow ? "burger-list burger-list-active" : "burger-list"}>
        <div className='burgrer-list-container'>
          <div className='title_nav_mobile transform'>
            <h3>Меню</h3>
            <span className='exit' onClick={toggleFIeldset}>✖</span>
          </div>
          <nav className='nav-mobile transform'>
            <NavLink to="/live">LIVE</NavLink>
            <NavLink to="/results">Результаты</NavLink>
            <NavLink to="/timeBoard">Расписание</NavLink>
            <NavLink to="/all">Прогнозы</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
