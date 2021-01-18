import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <NavLink to="/" exact activeClassName="active">Все</NavLink>
      <NavLink to="/live">Live</NavLink>
      <NavLink to="/results">Результаты</NavLink>
      <NavLink to="/timeBoard">Расписание</NavLink>
      <NavLink to="/all">Прогнозы</NavLink>
    </nav>
  );
};
