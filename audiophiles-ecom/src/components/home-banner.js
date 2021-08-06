import React from 'react'
import { Link } from 'react-router-dom';
export default function HomeBanner(props) {
    
    
    function findItem(products,productName){
        return products.filter(item => item.name === productName)
    }
    let ourItem = findItem(props.ourData, "XX99 Mark II Headphones")
    return (
        <div className="home__banner">
            <div className="home__banner-cta">
                <p className="home__banner-cta-uppertitle">New product</p>
                <h1 className="home__banner-cta-title">XX99 Mark II Headphones</h1>
                <p className="home__banner-cta-undertext">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to={{
                        pathname: `/headphones/XX99 Mark II Headphones`,
                        state: {
                            ourProps: ourItem[0],
                        },
                    }}>

                    
                  <button className="home__banner-cta-btn">See Product</button> 
                </Link>
                               
            </div>
        </div>
    )
}
