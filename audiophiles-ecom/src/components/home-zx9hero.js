
import React from 'react'
import { Link } from 'react-router-dom'
import circles from "../assets/home/desktop/pattern-circles.svg"

export default function HomeZx9hero(props) {
    
    function findItem(products,productName){
        return products.filter(item => item.name === productName)
    }
    let ourItem = findItem(props.ourData, "ZX9 Speaker")
    
    return (
        <div className="home__zx9-hero"> 
            <img src={circles} alt="circles" className="home__zx9-hero-circles" />
            <img className="home__zx9-hero-img" src={props.ourImg} alt="zx9-speaker" />
            <div className="home__zx9-hero-text">
                <h1 className="home__zx9-hero-title">zx9 speaker</h1>
                <p className="home__zx9-hero-info">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link to={{
                        pathname: `/speakers/ZX9 Speaker`,
                        state: {
                            ourProps: ourItem[0],
                        },
                    }}>
                     <button className="home__zx9-hero-cta">See product</button>   
                </Link>
                
            </div>
        </div>
    )
}
