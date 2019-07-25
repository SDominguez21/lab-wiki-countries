import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import { Switch, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
import countries from "./countries.json";

class App extends Component {
  //constructor(props){
// super(props)
// this.state ={allTheCountries= countries}
//}
// } YOU DO NOT NEED A STATE TO PASS PROPS 
  render() {
    console.table(countries);
    return (
      <div className="App">
        <Navbar allCountries={countries}/> 
        {/* YOU CREATE THE PROP HERE FOR THE FIRST TIME ^ */}
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route exact path="/:id" component={CountryDetails} />
            {/* in the constructor ex. path would be '/country/:code' */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
