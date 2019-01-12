import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react
import App from './App';
//dom manipulation
import dom from "./domApp"

let REACT_MODE = true;
REACT_MODE = false;

console.log("Starting experiment")
if (REACT_MODE) {
    //REACT ENABLED
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    //PLAIN DOM MANIPULATION
    dom();
}