import React, { Component } from 'react';
import Form from '../src/components/form';
import Header from './Header';
import Offer from './Offer';
import Gallery from './Gallery';
import Example from './example_component';

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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

  componentWillMount() {
    this.callAPI();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint"
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }


  render() {
    return (
      <div >
        <Header scrollFunc={this.scrollTo}></Header>
        <Example></Example>
        {/* <Offer ></Offer> */}
        <Gallery name="galeria" toTop={this.scrollToTop}></Gallery>
        
        {/* <Form></Form> */}
        {/* {this.state.apiResponse} */}
      </div>
    );
  }
}

export default App;
