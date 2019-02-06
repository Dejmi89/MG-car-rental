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
import InputAnimation from './components/inputAnimation';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      galleryReveal:false,
      offerReveal:false
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
    else if (window.scrollY <= 600 && this.state.offerReveal === true) {
      this.setState({ offerReveal: false });
    }
    else if (window.scrollY >= 610 && this.state.offerReveal !== true) {
      this.setState({ offerReveal: true });
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
        <h1 style={{
          textAlign:'center', 
          marginTop:'2%', 
          marginBottom:'2%',
          fontWeight:'500', 
          fontSize:'2.3em',
          }} name="offer">Oferta</h1>
        <Offer toTop={this.scrollToTop} offerReveal={this.state.offerReveal}></Offer>
        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'2.3em'}} name="gallery">Galeria</h1>
        <Gallery  toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}></Gallery>
        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'2.3em'}} name="contact">Kontakt</h1>
        <Form toTop={this.scrollToTop}></Form>
        {/* {this.state.apiResponse} */}
        <Footer/>
        
      </div>
    );
  }
}

export default App;
