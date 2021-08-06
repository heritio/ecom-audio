import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function Productdetail({
  addCartItem,
  amount,
  setAmount,
  setProduct,
}) {
  const history = useHistory();
  const location = useLocation();
  const { ourProps } = location.state;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 950px)",
  });
  const isTablet = useMediaQuery({ query: "(max-width: 780px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
 
  function showCart(){
    let ourCart = document.querySelector(".cart-container");
    ourCart.classList.remove("hide");
  }
  let ourProduct = ourProps;
  console.log("ourProps", ourProps);
  return (
    <div className="product-detail">
      <p
        className="product-detail__category"
        onClick={() => history.push(`/${ourProps.category}`)}
      >
        Go Back
      </p>
      <div className="product-detail__product">
        <img
          className="product-detail__picture"
          src={
            isMobile
              ? "." + ourProps.image.mobile
              : isTablet
              ? "." + ourProps.image.tablet
              : "." + ourProps.image.desktop
          }
          alt=""
        />
        <div className="product-detail__info">
          {ourProps.new === true ? (
            <p className="product-preview__new-labe">New product</p>
          ) : null}
          <h2 className="product-detail__name">{ourProps.name}</h2>
          <p className="product-detail__description">{ourProps.description}</p>
          <h3 className="product-detail__price">$ {ourProps.price}</h3>
          <div className="product-detail__add-to-cart">
            <div className="product-detail__add-to-cart-amount">
              <button
                onClick={(e) => setAmount(amount >= 2 ? amount - 1 : 1)}
                className="product-detail__add-to-cart-amount-sign"
              >
                -
              </button>
              <h4 className="product-detail__add-to-cart-amount-number">
                {amount}
              </h4>
              <button
                onClick={() => setAmount(amount + 1)}
                className="product-detail__add-to-cart-amount-sign"
              >
                +
              </button>
            </div>
            <div className="product-detail__add-to-cart-cta">
              <button
                onClick={() => {
                    showCart();
                  addCartItem(ourProduct);
                }}
                className="product-detail__add-to-cart-btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail__features">
        <div className="product-detail__features-text">
          <h3 className="product-detail__features-text-title">Features</h3>
          <p className="product-detail__features-text-info">
            {ourProps.features}
          </p>
        </div>
        <div className="product-detail__in-the-box">
          <h3 className="product-detail__in-the-box-title">In the box</h3>
          <ul className="product-detail__in-the-box-items">
            {ourProps.includes.map((item) => {
              return (
                <li className="product-detail__in-the-box-item">
                  <span className="product-detail__in-the-box-item-count">
                    {item.quantity}x
                  </span>
                  <span className="product-detail__in-the-box-item-name">
                    {item.item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="product-detail__gallery">
        <div className="product-detail__gallery-pair-container">
          <img
            className="product-detail__gallery-pair-img-1"
            src={
              isMobile
                ? "." + ourProps.gallery.first.mobile
                : isTablet
                ? "." + ourProps.gallery.first.tablet
                : "." + ourProps.gallery.first.desktop
            }
            alt={ourProps.name + "gallery item 1"}
          />
          <img
            className="product-detail__gallery-pair-img-2"
            src={
              isMobile
                ? "." + ourProps.gallery.second.mobile
                : isTablet
                ? "." + ourProps.gallery.second.tablet
                : "." + ourProps.gallery.second.desktop
            }
            alt={ourProps.name + "gallery item 2"}
          />
        </div>
        <img
          className="product-detail__gallery-single-img"
          src={
            isMobile
              ? "." + ourProps.gallery.third.mobile
              : isTablet
              ? "." + ourProps.gallery.third.tablet
              : "." + ourProps.gallery.third.desktop
          }
          alt={ourProps.name + "gallery item 3"}
        />
      </div>
    </div>
  );
}
