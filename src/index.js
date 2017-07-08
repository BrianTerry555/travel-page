import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SiteContainer from "./containers/site-container.js";
import Header from "./components/header.js";


let mySites = [
{
    name: "Atitlan,",
    country: "Guatamala",
    image: "/images/atitlan.jpg",
    desc: "Beautiful Lake",
},
{
    name: "Machu Picchu,",
    country: "Peru",
    image: "/images/machu-picchu.jpg",
    desc: "Magical mountain place",
},
{
    name: "Tauranga,",
    country: "New Zealand",
    image: "/images/tauranga.jpg",
    desc: "Amazing place",
},
];



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Click the picture for a description.</h2>
        <SiteContainer sites={mySites}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
