import React,{useState} from "react";
import {useLocation} from "react-router-dom";
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
        placeholder={props.inputPlaceholder}
      />
    </div>
  );
}


function PaymentCheckbox(props) {
  return <div className="checkout__payment">
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

function ModalCompletedCheckout(props){
  return (<div className="checkout__modal">
   <h1 className="checkout__modal-checkmark"><i class="fas fa-check"></i></h1>
   <h1 className="checkout__modal-title-1">THANK YOU</h1>
   <h1 className="checkout__modal-title-2">FOR YOUR ORDER</h1>
   <p className="checkout__modal-confirmation">You will receive an email confirmation shortly</p>
   <div className="checkout__modal-brief-summary">
     <div className="checkout__modal-items">
       <div className="checkout__modal-items-top">
          <img className="checkout__modal-items-top-img" src={"." + props.item[0].product.image.mobile} alt={props.item[0].product.name + "img"} />
            <div className="checkout__modal-items-top-info">
              <h5>{props.item[0].product.name}</h5>
              <p>$ {props.item[0].product.price}</p>
            </div>
          <p className="checkout__modal-items-top-info-amount">x{props.item[0].amount}</p>
       </div>
       {props.item.length > 1 ? <p className="checkout__modal-items-top-others">and {props.item.length - 1} other item(s)</p>  : null}
     </div>
     <div className="checkout__modal-total">
       <p className="checkout__modal-total-title">GRAND TOTAL</p>
       <h5 className="checkout__modal-total-grand">$ {props.grandTotal}</h5>
     </div>
   </div>
   <button className="checkout__modal-finalize">BACK TO HOME</button>
  </div>)
}



export default function Checkout() {
  const [formDetail, setFormDetail] = useState();
  const location = useLocation();
  const { ourCart,ourTotal } = location.state;
  let vatNumber = 20;
  let vatPercent = Math.floor((vatNumber / 100) * ourTotal);
 console.log("ourCart",ourCart);
 console.log("ourTotal", ourTotal);
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
                inputPlaceholder={"Johny Cage"}
              />
              <Ourinput
                inputRef={"email"}
                inputType={"email"}
                inputName={"Email Adress"}
                inputPlaceholder={"johny@mail.com"}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"phonenumber"}
                inputType={"tel"}
                inputName={"Phone Number"}
                inputPlaceholder={"+1 202-555-0136"}
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
              />
            </div>
            <div className="checkout__form-section-pair">
              <Ourinput
                inputRef={"zipcode"}
                inputType={"text"}
                inputName={"Zip Code"}
                inputPlaceholder={"10001"}
              />
              <Ourinput
                inputRef={"city"}
                inputType={"text"}
                inputName={"City"}
                inputPlaceholder={"New York"}
              />
            </div>
            <div className="checkout__form-section-single-short">
              <Ourinput
                inputRef={"country"}
                inputType={"text"}
                inputName={"Country"}
                inputPlaceholder={"United States"}
              />
            </div>
          </div>
          <div className="checkout__form-billing-detail">
            <h3 className="checkout__form-section">Payment Details</h3>
            <PaymentCheckbox />
            <div className="checkout__form-section-pair">
              <Ourinput
                inputRef={"emoneynumber"}
                inputType={"text"}
                inputName={"e-Money Number"}
                inputPlaceholder={"238521993"}
              />
              <Ourinput
                inputRef={"emoneypin"}
                inputType={"text"}
                inputName={"e-Money PIN"}
                inputPlaceholder={"6891"}
              />
            </div>
          </div>
        </div>
        <div className="checkout__summary">
           <h3 className="checkout__form-title">SUMMARY</h3>
           <div className="checkout__summary-items">
             {ourCart.length !== 0 ? ourCart.map((item)=>{
                return(<div className="checkout__summary-item-container">
                <div className="checkout__summary-item-name">
                  <img className="checkout__summary-item-image" src={"." + item.product.image.mobile} alt={item.product.name + "summary-img"} />
                  <h5 className="checkout__summary-name-title">{item.product.name}</h5>
                </div>
                <p className="checkout__summary-item-amount">x{item.amount}</p>
         </div>)
             }) : null}
           </div>
            <div  className="checkout__summary-price">
              <p>Total</p>
              <h5>$ {ourTotal ? ourTotal : 0}</h5>
            </div>
            <div  className="checkout__summary-price">
              <p>Shipping</p>
              <h5>$ {ourTotal ? 50 : 0}</h5>
            </div>
            <div  className="checkout__summary-price">
              <p>VAT (INCLUDED)</p>
              <h5>$ {ourTotal ? vatPercent : 0}</h5>
            </div>

            <div  className="checkout__summary-total">
              <p>Grand Total</p>
              <h5>$ {ourTotal ? (ourTotal + 50 ) : 0}</h5>
            </div>
            <button className="checkout__summary-cta">Continue & pay</button>
        </div>
      </div>
      <ModalCompletedCheckout item={ourCart} grandTotal={ourTotal + 50 }/>
    </div>
  );
}
