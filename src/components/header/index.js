import React from "react";
import "./style.css";
import { BtnBurger } from "./btnBurger";
import { HeaderNav } from "./headerNav";
import { BtnSearch } from "./btnSearch";

export const Header = () => {
  return (
    <header className="app-header">
      <div className='container'>
        <BtnBurger />
        <h1 className='header-title'>РАСПИСАНИЕ&nbsp;МАТЧЕЙ</h1>
        <HeaderNav />
        <BtnSearch />
        <button className='log-in'>Войти</button>
      </div>
    </header>
  );
};
