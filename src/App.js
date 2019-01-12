import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import config from "./config"

class App extends Component {

  constructor() {
    super();
    this.state = {};
    //first time timer
    console.time("REACT perf test")
  }

  shouldComponentUpdate() {
    //subsequent timers
    console.time("REACT perf test");
    return true;
  }

  componentDidMount() {
    //first time timer end
    console.timeEnd("REACT perf test");
  }

  componentDidUpdate() {
    //subsequent timers end
    console.timeEnd("REACT perf test");
  }

  render() {
    let elements = [];
    for (var i = 0; i < config.NUMBER_OF_ELEMENTS; i++) {
      elements.push(<div className="element" key={i}>{`element #${i}`}</div>)
    }
    return (
      <>
        <button onClick={() => {
          //triggering a refresh
          this.setState({});
        }}>Add {config.NUMBER_OF_ELEMENTS} elements</button>
        {elements}
      </>
    );
  }
}

export default App;
