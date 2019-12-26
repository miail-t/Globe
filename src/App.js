import React, { Component,useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import rd3 from "react-d3-library";
import topojson from "topojson";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import World from './World'


  class App extends Component {
    render() {
     
      return (<div className="App"><World/></div>
       
      );
    
  }
};

export default App;
