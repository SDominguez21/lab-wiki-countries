import React, { Component } from 'react';
import Card from './Card';
import countries from '../countries.json';

class CountriesList extends Component {
  render() {
    console.table(countries);
    return (
      <div className="col-5 overflow">
        <div className="list-group">
          {countries.map((oneCountry, i) => {
            return <Card key={i} {...oneCountry} />;
          })}
        </div>
      </div>
    );
  }
}
export default CountriesList;

//if i were to use props and not import the data on the top 
//we would make a function CountryList(props){
  //let ONLY with functional components 
// let showAllCountries = () => {
// return props.countries((eachCountries, i)=>)
//<li><Link to = {`/country/{each.cca3}>{eachCountry.name.common}</Link></li>
//}
//}