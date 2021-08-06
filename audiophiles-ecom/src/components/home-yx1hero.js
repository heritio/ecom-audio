import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeYx1hero(props) {
    function findItem(products,productName){
        return products.filter(item => item.name === productName)
    }
    let ourItem = findItem(props.ourData, "YX1 Wireless Earphones")
    
    return (
        <div className="home__yx1-hero">
            <div className="home__yx1-hero-img">
            </div>
            <div className="home__yx1-hero-cta">
               <h1 className="home__yx1-hero-title">yx1 earphones</h1>
               <Link to={{
                        pathname: `/speakers/YX1 Wireless Earphones`,
                        state: {
                            ourProps: ourItem[0],
                        },
                    }}>
                  <button className="home__yx1-hero-cta-btn">see product</button>      
                    </Link>
               
            </div>
        </div>
    )
}
