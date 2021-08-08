
import React from 'react'

export default function HomeCategory(props) {

    return (
        <div onClick={()=> window.scrollTo(0,0)}>
            <img   className="home__category-img" src={props.src} alt="menu-img"/>
            <h2 className="home__category-text">{props.menuName}</h2>
            <p className="home__category-shop">Shop<i class="fas fa-chevron-right"></i></p>
        </div>
    )
}
