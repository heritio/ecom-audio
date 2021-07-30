import React from "react";

function Ourinput(props) {
  return (
    <div
      className={
        props.longInput
          ? "checkout__input checkout__input--error"
          : "checkout__input"
      }
    >
      <label className="checkout__input-label" for={props.inputRef}>
        <p className="checkout__input-label-text">{props.inputName}</p>
        <p className="checkout__input-label-error checkout__input-label-error--hiden">
          Wrong format
        </p>{" "}
      </label>
      <input
        className="checkout__input-field"
        type={props.inputType}
        id={props.inputRef}
        name={props.inputRef}
      />
    </div>
  );
}
function PaymentCheckbox(props) {
  return <div className="checkout__payment-choices">
         <p className="checkout__payment-choices-title">Payment Method</p>
         <div className="checkout__payment-choices-container">
             <div className="checkout__payment-choices-elem">
                <input className="checkout__payment-choices-elem-box" type="radio" name="payment" value="e-money" id="e-money"/>
                <label htmlFor="e-money">e-Money</label>
             </div>  
             <div className="checkout__payment-choices-elem">
                
                <input className="checkout__payment-choices-elem-box" type="radio" name="payment" value="cashondelivery" id="cashondelivery"/>
                <label htmlFor="cashondelivery">Cash On Delivery</label>
             </div>
         </div>
    </div>;
}

export default function Checkout() {
  return (
    <div className="checkout">
      <p className="checkout__back-btn">go back</p>
      <div className="checkout__containter">
        <div className="checkout__form">
          <h1 className="checkout__form-title">CHECKOUT</h1>
          <div className="checkout__form-billing-detail">
            <h3 className="checkout__form-section">Billing Detail</h3>
            <div className="checkout__form-section-pair">
              <Ourinput
                inputRef={"name"}
                inputType={"text"}
                inputName={"Name"}
              />
              <Ourinput
                inputRef={"email"}
                inputType={"email"}
                inputName={"Email Adress"}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"phonenumber"}
                inputType={"tel"}
                inputName={"Phone Number"}
              />
            </div>
          </div>
          <div className="checkout__form-billing-detail">
            <h3 className="checkout__form-section">Shipping Info</h3>

            <div className="checkout__form-section-single-long">
              <Ourinput
                inputRef={"youradress"}
                inputType={"text"}
                inputName={"Your address"}
                longInput={true}
              />
            </div>
            <div className="checkout__form-section-pair">
              <Ourinput
                inputRef={"zipcode"}
                inputType={"text"}
                inputName={"Zip Code"}
              />
              <Ourinput
                inputRef={"city"}
                inputType={"text"}
                inputName={"City"}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"country"}
                inputType={"text"}
                inputName={"Country"}
              />
            </div>
          </div>
          <div className="checkout__form-billing-detail">
            <h3 className="checkout__form-section">Payment Details</h3>
            <PaymentCheckbox />
          </div>
        </div>
        <div className="checkout__summary"></div>
      </div>
    </div>
  );
}
