import React, { Component } from 'react';
import Form from '../src/components/form';
import Header from './Header';
import Offer from './Offer';
import Gallery from './Gallery';
import scrollToComponent from 'react-scroll-to-component';
import Example from './example_component';

import { Router, Route, hashHistory } from 'react-router-dom';
import example_component from './example_component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  


  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    scrollToComponent(this.Gallery, { offset: 0, align: 'top', duration: 1000, ease:'inExpo'});
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div >
        <Header onClick={() => scrollToComponent(this.Gallery)}></Header>
        {/* <Example></Example> */}
        {/* <Offer ></Offer> */}
        <Gallery ref={(section) => { this.Gallery = section; }}></Gallery>
        {/* <Form></Form> */}
        {/* {this.state.apiResponse} */}
      </div>
    );
  }
}

export default App;
