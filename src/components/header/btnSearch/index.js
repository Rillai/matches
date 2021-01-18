import React, { useState } from "react";
import "./style.css";

export const BtnSearch = () => {
  const [isShow, setisShow] = useState(false);
  const toggleFIeldset = () => setisShow(!isShow);
  return (
    <div className='btn-search'>
      <input className={isShow ? "searh search-active" : "searh"} disabled={!isShow} />
      <img src='assets/img/header/search.png' alt="search" onClick={toggleFIeldset} />
    </div>
  );
};
