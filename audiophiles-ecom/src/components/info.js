
import React from 'react'
import { withRouter, useLocation } from 'react-router-dom';

 function Info() {
    let location = useLocation();
    if (location.pathname.match("checkout")){
            return null;
    }

    return (
        <div className="info">
            <div className="info__hero"></div>
            <div className="info__content">
                <h2 className="info__content-title">Bringing you the <span className="info__content-best">best</span> audio gear</h2>
                <p className="info__content-text">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    )
}
export default withRouter(Info);

