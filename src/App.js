import React, { Component } from 'react';
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Form from '../src/components/form';
import Header from './Header';
import Offer from './Offer';
import Gallery from './Gallery';



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
        <Header scrollFunc={this.scrollTo} toTop={this.scrollToTop}></Header>
        <h1 style={{textAlign:'center', marginTop:'2%', marginBottom:'2%'}}>Oferta</h1>
        <Offer name="offer" toTop={this.scrollToTop}></Offer>
        <h1 style={{textAlign:'center'}}>Galeria</h1>
        <Gallery name="gallery" toTop={this.scrollToTop}></Gallery>
        
        {/* <Form name="contact" toTop={this.scrollToTop}></Form> */}
        {/* {this.state.apiResponse} */}
      </div>
    );
  }
}

export default App;
