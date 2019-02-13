import React, { Component } from 'react';
import * as Scroll from "react-scroll";
import MediaQuery from 'react-responsive';
import {
  animateScroll as scroll,
  scroller
} from "react-scroll";

import Form from '../src/components/form';
import Header from './Header';
import MobileHeader from './components/mobileSize/mobile_header';
import IpadHeader from './components/iPadSize/iPad_header';
import Offer from './Offer';
import MobileOffer from './components/mobileSize/mobile_offer';
import IpadOffer from './components/iPadSize/iPad_offer';
import Gallery from './Gallery';
import MobileGallery from './components/mobileSize/mobile_gallery';
import IpadGallery from './components/iPadSize/ipad_gallery';
import Footer from './Footer';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      galleryReveal:false,
      offerReveal:false,
      windowWidth:'',
      windowHeight:''
    };
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleReveal);
    this.setState({
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight
    })
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
      const windowHeight = this.state.windowHeight;
      const windowWidth = this.state.windowWidth;
    return (
      <div style={{fontFamily:'satisfy, cursive'}}>
      
        <MediaQuery maxWidth = {767}>
            <MobileHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Header scrollFunc={this.scrollTo} toTop={this.scrollToTop}></Header>
        </MediaQuery>

        
         <h1 style={{
          textAlign:'center', 
          marginTop:'2%', 
          marginBottom:'2%',
          fontWeight:'500', 
          }} name="offer">Oferta</h1>

          <MediaQuery maxWidth = {767}>
            <MobileOffer toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}/>
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadOffer toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Offer toTop={this.scrollToTop} offerReveal={this.state.offerReveal}></Offer> 
        </MediaQuery>
        

        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'2.3em'}} name="gallery">Galeria</h1>
        
        <MediaQuery maxWidth = {767}>
            <MobileGallery toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}/>
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadGallery toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
        <Gallery  toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}></Gallery>
        </MediaQuery>
          
          
        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'2.3em'}} name="contact">Kontakt</h1>
        <Form toTop={this.scrollToTop} windowWidth={windowWidth} windowHeight={windowHeight}></Form>
        {/* {this.state.apiResponse} */}
        <Footer/>
      </div>
    );
  }
}

export default App;
