import React from "react";
import { Link } from "react-router-dom";
import test from "../assets/headphones.svg";
export default function Productpreview(props) {
  console.log(props.directionByKey);
  return (
    <div className={"product-preview " + props.directionByKey}>
      <div className="product-preview__img-container">
        <img
          className="product-preview__img"
          src={props.ourItem.image.desktop}
          alt={props.name}
        />
      </div>
      <div className="product-preview__content">
        {props.ourItem.new === true ? (
          <p className="product-preview__new-labe">New Product</p>
        ) : null}
        <h2 className="product-preview__name">{props.ourItem.name}</h2>
        <p className="product-preview__info">{props.ourItem.description}</p>
        <div className="product-preview__cta-container ">
          <Link to={{
              pathname: `/${props.ourItem.category}/${props.ourItem.name}`,
              state: {
                ourProps: props.ourItem,
              },
            }}>
            <button className="product-preview__cta-btn link-cursor">
              See product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
