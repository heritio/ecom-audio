import React, {useState,useReducer} from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header";
import Home from "./components/home";
import Info from "./components/info";
import Footer from "./components/footer";
import Headphones from "./components/headphones";
import Earphones from "./components/earphones";
import Speakers from "./components/speakers";
import data from "./data.json";
import Productdetail from "./components/productdetail";
import Checkout from "./components/checkout";
export default function Routes() {

  
  
  let ourData = data;
  console.log(ourData);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"  >
          <Home   />
        </Route>
        <Route exact path="/checkout"  >
          <Checkout  />
        </Route>
        <Route
          exact
          path="/headphones"
        >
        <Headphones data={ourData}/>
        </Route>
        <Route
         
          path="/headphones/:id"
        >
        <Productdetail data={ourData}/>
        </Route>
        <Route
          exact
          path="/speakers"
        >
           <Speakers data={ourData}/>
        </Route>
        <Route
          
          path="/speakers/:id"
        >
        <Productdetail data={ourData}/>
        </Route>
        <Route
          exact
          path="/earphones"
          
         >
        <Earphones  data={ourData}/>
        </Route>
        <Route
        
          path="/earphones/:id"
        >
          <Productdetail data={ourData}/>
        </Route>
      </Switch>
      <Info />
      <Footer />
    </BrowserRouter>
  );
}
