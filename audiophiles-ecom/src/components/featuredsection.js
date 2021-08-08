import React from 'react'

function featuredsection(props) {
    return (
        <div key={"key for" + otherItem.name} className="product-detail__others-container">
                <img
                className="product-detail__others-item"
                 src={isMobile
              ? "." + otherItem.image.mobile
              : isTablet
              ? "." + otherItem.image.tablet
              : "." + otherItem.image.desktop} alt={otherItem.slug} />
              <h5 className="product-detail__others-name">{otherItem.name}</h5>
               
                  <button onClick={()=>replaceOurPath(index)}  className="product-detail__others-btn">SEE PRODUCT</button>
               
                  
                 
              
        </div>
    )
}

export default featuredsection
