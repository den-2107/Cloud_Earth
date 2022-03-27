import React from "react";
import logo from "./img/logo-header.png";

import s from "./index.modules.css";
const buttonClick = event => alert(event.target.id);
const Header = () => {

  return (
    <header className={s.header}>
      <div className={s.div}>
        <img src={logo} alt="logo" className={s.logo}/>
        <p className={s.text}>Cloud_Earth</p>  
      </div>
        <div>
          <button className={s.add_button}
          onClick={buttonClick}
          >Добавить пост</button>
        </div>
    </header>
) ;

};

export default Header;