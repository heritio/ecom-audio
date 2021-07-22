import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Header from './components/header';
export default function Routes() {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
         
        </Switch>
      </BrowserRouter>
    )
}
