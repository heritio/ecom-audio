import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
function Ourinput(props) {
  return (
    <div
      id={props.inputRef}
      className={
        props.longInput
          ? "checkout__input checkout__input--error"
          : "checkout__input"
      }
    >
      <label className="checkout__input-label" for={props.inputRef}>
        <p className="checkout__input-label-text">{props.inputName}</p>
        <p
          id={props.inputRef + "error"}
          className="checkout__input-label-error checkout__input-label-error--hiden"
        >
          Wrong format
        </p>{" "}
      </label>
      <input
        className="checkout__input-field"
        type={props.inputType}
        name={props.inputRef}
        placeholder={props.inputPlaceholder}
        onChange={(e) => props.onChangeHandler(e.target.value)}
      />
    </div>
  );
}

function PaymentCheckbox(props) {
  return (
    <div className="checkout__payment">
      <p className="checkout__payment-choices-title">Payment Method</p>
      <div className="checkout__payment-choices-container">
        <div className="checkout__payment-choices-elem">
          <input
            className="checkout__payment-choices-elem-box"
            onChange={(e) => props.handleChange(e)}
            type="radio"
            name="payment"
            value="e-money"
            id="e-money"
          />
          <label htmlFor="e-money">e-Money</label>
        </div>
        <div className="checkout__payment-choices-elem">
          <input
            className="checkout__payment-choices-elem-box"
            onChange={(e) => props.handleChange(e)}
            type="radio"
            name="payment"
            value="cashondelivery"
            id="cashondelivery"
          />
          <label htmlFor="cashondelivery">Cash On Delivery</label>
        </div>
      </div>
    </div>
  );
}

function ModalCompletedCheckout(props) {
  return (
    <div className="checkout__modal hide">
      <h1 className="checkout__modal-checkmark">
        <i class="fas fa-check"></i>
      </h1>
      <h1 className="checkout__modal-title-1">THANK YOU</h1>
      <h1 className="checkout__modal-title-2">FOR YOUR ORDER</h1>
      <p className="checkout__modal-confirmation">
        You will receive an email confirmation shortly
      </p>
      <div className="checkout__modal-brief-summary">
        <div className="checkout__modal-items">
          <div className="checkout__modal-items-top">
            <img
              className="checkout__modal-items-top-img"
              src={"." + props.item[0].product.image.mobile}
              alt={props.item[0].product.name + "img"}
            />
            <div className="checkout__modal-items-top-info">
              <h5>{props.item[0].product.name}</h5>
              <p>$ {props.item[0].product.price}</p>
            </div>
            <p className="checkout__modal-items-top-info-amount">
              x{props.item[0].amount}
            </p>
          </div>
          {props.item.length > 1 ? (
            <p className="checkout__modal-items-top-others">
              and {props.item.length - 1} other item(s)
            </p>
          ) : null}
        </div>
        <div className="checkout__modal-total">
          <p className="checkout__modal-total-title">GRAND TOTAL</p>
          <h5 className="checkout__modal-total-grand">$ {props.grandTotal}</h5>
        </div>
      </div>
      <Link to="/">
        <button
          onClick={() => {props.clearCart(); window.scrollTo(0,0)}}
          className="checkout__modal-finalize"
        >
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}

export default function Checkout({ clearCart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState();
  const [ePin, setEPin] = useState("");
  const [enumber, setENumber] = useState("");
  const [formSubmit, setFormSubmit] = useState();

  const location = useLocation();
  const history = useHistory();
  const { ourCart, ourTotal } = location.state;
  let vatNumber = 20;
  let vatPercent = Math.floor((vatNumber / 100) * ourTotal);

  function formHandler() {
  
    let paymentNode;
    

    if(name.length === 0) {
      let ourBorder = document.querySelector("#name");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#nameerror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#name");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#nameerror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }
    if (!isValidEmail(email)) {
      let ourBorder = document.querySelector("#email");
      let ourErrorLabel = document.querySelector("#emailerror");
      ourBorder.classList.add("red-border");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#email");
      let ourErrorLabel = document.querySelector("#emailerror");
      ourBorder.classList.remove("red-border");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if ( phone.length < 8) {
      let ourBorder = document.querySelector("#phonenumber");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#phonenumbererror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else{
      let ourBorder = document.querySelector("#phonenumber");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#phonenumbererror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (adress.length === 0) {
      let ourBorder = document.querySelector("#youradress");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#youradresserror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#youradress");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#youradresserror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (zip.length === 0) {
      let ourBorder = document.querySelector("#zipcode");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#zipcodeerror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#zipcode");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#zipcodeerror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (city.length === 0) {
      let ourBorder = document.querySelector("#city");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#cityerror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#city");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#cityerror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (country.length === 0) {
      let ourBorder = document.querySelector("#country");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#countryerror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#country");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#countryerror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (adress.length === 0) {
      let ourBorder = document.querySelector("#youradress");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#youradresserror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else {
      let ourBorder = document.querySelector("#youradress");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#youradresserror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }
    
    if (payment !== undefined && payment === "e-money") {
      if (ePin.length === 4 && enumber.length === 9) {
        paymentNode = {
          payment: payment,
          payInfo: { ePin: ePin, eNumber: enumber },
        };
        let ourTitle = document.querySelector(".checkout__payment-choices-title");
      ourTitle.classList.remove("red-title");
      }
    } else if (payment === "cashondelivery") {
      paymentNode = { payment: payment };
      let ourTitle = document.querySelector(".checkout__payment-choices-title");
      ourTitle.classList.remove("red-title");
    }else{
      let ourTitle = document.querySelector(".checkout__payment-choices-title");
      ourTitle.classList.add("red-title");
      ourTitle.scrollIntoView();
      return;
    }
   
    if (ePin.length === 0 && payment === "e-money") {
      let ourBorder = document.querySelector("#emoneypin");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#emoneypinerror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else if(ePin.length !== 0 && payment === "e-money"){
      let ourBorder = document.querySelector("#emoneypin");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#emoneypinerror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden");
    }

    if (enumber.length === 0 && payment === "e-money") {
      let ourBorder = document.querySelector("#emoneynumber");
      ourBorder.classList.add("red-border");
      let ourErrorLabel = document.querySelector("#emoneynumbererror");
      ourErrorLabel.classList.remove("checkout__input-label-error--hiden");
      ourBorder.scrollIntoView();
      return;
    } else if(enumber.length !== 0 && payment !== "e-money"){
      let ourBorder = document.querySelector("#emoneynumber");
      ourBorder.classList.remove("red-border");
      let ourErrorLabel = document.querySelector("#emoneynumbererror");
      ourErrorLabel.classList.add("checkout__input-label-error--hiden"); 
    }

    
    setFormSubmit({
      name,
      email,
      phone,
      adress,
      zip,
      city,
      country,
      paymentNode,
    });
    console.log("ourForm",formSubmit);
    setName("");
    setEmail("");
    setPhone(""); 
    setAdress(""); 
    setZip(""); 
    setCity(""); 
    setCountry(""); 
    setPayment(""); 
    setEPin(""); 
    setENumber(""); 
    let ourModal = document.querySelector(".checkout__modal");
    ourModal.classList.remove("hide");
    window.scrollTo(0, 0);
    
  }
  function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!email && typeof email === "string" && email.match(emailRegex);
  }

  function handleChange(e) {
    setPayment(e.target.value);
  }
  function goBack() {
    history.goBack();
  }

  console.log("ourCart", ourCart);
  console.log("ourTotal", ourTotal);

  return (
    <div className="checkout">
      <p className="checkout__back-btn" onClick={() => goBack()}>
        go back
      </p>
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
                inputPlaceholder={"Johny Cage"}
                onChangeHandler={setName}
              />
              <Ourinput
                inputRef={"email"}
                inputType={"email"}
                inputName={"Email Adress"}
                inputPlaceholder={"johny@mail.com"}
                onChangeHandler={setEmail}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"phonenumber"}
                inputType={"tel"}
                inputName={"Phone Number"}
                inputPlaceholder={"+1 202-555-0136"}
                onChangeHandler={setPhone}
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
                inputPlaceholder={"1137 Williams Avenue"}
                onChangeHandler={setAdress}
              />
            </div>
            <div className="checkout__form-section-pair">
              <Ourinput
                inputRef={"zipcode"}
                inputType={"text"}
                inputName={"Zip Code"}
                inputPlaceholder={"10001"}
                onChangeHandler={setZip}
              />
              <Ourinput
                inputRef={"city"}
                inputType={"text"}
                inputName={"City"}
                inputPlaceholder={"New York"}
                onChangeHandler={setCity}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"country"}
                inputType={"text"}
                inputName={"Country"}
                inputPlaceholder={"United States"}
                onChangeHandler={setCountry}
              />
            </div>
          </div>
          <div className="checkout__form-billing-detail">
            <h3 className="checkout__form-section">Payment Details</h3>
            <PaymentCheckbox
              handleChange={handleChange}
              paymentMethod={payment}
            />
            {payment !== undefined && payment === "e-money" ? (
              <div className="checkout__form-section-pair">
                <Ourinput
                  inputRef={"emoneynumber"}
                  inputType={"text"}
                  inputName={"e-Money Number"}
                  inputPlaceholder={"238521993"}
                  onChangeHandler={setENumber}
                />
                <Ourinput
                  inputRef={"emoneypin"}
                  inputType={"text"}
                  inputName={"e-Money PIN"}
                  inputPlaceholder={"6891"}
                  onChangeHandler={setEPin}
                />
              </div>
            ) : null}
          </div>
        </div>

        {ourCart.length > 0 ? (
          <div className="checkout__summary">
            <h3 className="checkout__form-title">SUMMARY</h3>
            <div className="checkout__summary-items">
              {ourCart.length !== 0
                ? ourCart.map((item) => {
                    return (
                      <div className="checkout__summary-item-container">
                        <div className="checkout__summary-item-name">
                          <img
                            className="checkout__summary-item-image"
                            src={"." + item.product.image.mobile}
                            alt={item.product.name + "summary-img"}
                          />
                          <h5 className="checkout__summary-name-title">
                            {item.product.name}
                          </h5>
                        </div>
                        <p className="checkout__summary-item-amount">
                          x{item.amount}
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="checkout__summary-price">
              <p>Total</p>
              <h5>$ {ourTotal ? ourTotal : 0}</h5>
            </div>
            <div className="checkout__summary-price">
              <p>Shipping</p>
              <h5>$ {ourTotal ? 50 : 0}</h5>
            </div>
            <div className="checkout__summary-price">
              <p>VAT (INCLUDED)</p>
              <h5>$ {ourTotal ? vatPercent : 0}</h5>
            </div>

            <div className="checkout__summary-total">
              <p>Grand Total</p>
              <h5>$ {ourTotal ? ourTotal + 50 : 0}</h5>
            </div>
            <button
              onClick={() => formHandler()}
              className="checkout__summary-cta"
            >
              Continue & pay
            </button>
          </div>
        ) : null}
      </div>
      {ourCart.length > 0 ? (
        <ModalCompletedCheckout
          clearCart={clearCart}
          item={ourCart}
          grandTotal={ourTotal + 50}
        />
      ) : null}
    </div>
  );
}
