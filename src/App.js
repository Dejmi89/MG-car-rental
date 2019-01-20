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
import Footer from './Footer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      galleryReveal:false
    };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleReveal);
}

  componentWillMount() {
    window.removeEventListener("scroll", this.handleReveal);
    this.callAPI();
  }

  handleReveal = () =>  {
    if (window.scrollY <= 2000 && this.state.galleryReveal === true) {
        this.setState({ galleryReveal: false });
    } else if (window.scrollY >= 2100 && this.state.galleryReveal !== true) {
        this.setState({ galleryReveal: true });
    }
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
      <div style={{fontFamily:'satisfy, cursive'}}>
        <Header scrollFunc={this.scrollTo} toTop={this.scrollToTop}></Header>
        <h1 style={{textAlign:'center', marginTop:'2%', marginBottom:'2%'}}>Oferta</h1>
        <Offer name="offer" toTop={this.scrollToTop}></Offer>
        <h1 style={{textAlign:'center'}} >Galeria</h1>
        <Gallery name="gallery" toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}></Gallery>
        
        {/* <Form name="contact" toTop={this.scrollToTop}></Form> */}
        {/* {this.state.apiResponse} */}
        <Footer/>
      </div>
    );
  }
}

export default App;
