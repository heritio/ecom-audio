import React from 'react'
import { Link } from 'react-router-dom'



export default function HomeZx7hero(props) {
    function findItem(products,productName){
        return products.filter(item => item.name === productName)
    }
    let ourItem = findItem(props.ourData, "ZX7 Speaker")
    
    return (
        <div className="home__zx7-hero">
            <h1 className="home__zx7-hero-title">zx7 speaker</h1>
            <Link to={{
                        pathname: `/speakers/ZX7 Speaker`,
                        state: {
                            ourProps: ourItem[0],
                        },
                    }}>
            <button className="home__zx7-hero-cta">see product</button>
            </Link>
            
        </div>
    )
}
