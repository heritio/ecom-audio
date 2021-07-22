import React from 'react'
import "../styles/App.css";
export default function NavItemMobile(props) {
    return (
        <>
        
            <img   className="header__mobile-nav__img" src={props.src} alt="menu-img"/>
            <h2 className="header__mobile-nav__text">{props.menuName}</h2>
            <p className="header__mobile-nav__link">Shop<i class="fas fa-chevron-right"></i></p>
        </>
    )
}
