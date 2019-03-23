import React, { Component } from 'react';
import * as Scroll from "react-scroll";
import MediaQuery from 'react-responsive';
import {
  animateScroll as scroll,
  scroller
} from "react-scroll";


import Header from './Header';
import MobileHeader from './components/mobileSize/mobile_header';
import IpadHeader from './components/iPadSize/iPad_header';
import Offer from './Offer';
import MobileOffer from './components/mobileSize/mobile_offer';
import IpadOffer from './components/iPadSize/iPad_offer';
import Gallery from './Gallery';
import MobileGallery from './components/mobileSize/mobile_gallery';
import IpadGallery from './components/iPadSize/ipad_gallery';
import Form from '../src/components/form';
import MobileForm from './components/mobileSize/mobile_form';
import IpadForm from './components/iPadSize/iPad_form';
import Footer from './Footer';
import MobileFooter from './components/mobileSize/mobile_footer';
import IpadFooter from './components/iPadSize/iPad_footer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      galleryReveal:false,
      iGalleryReveal: false,
      mobGalleryReveal:false,
      offerReveal:false,
      iOfferReveal:false,
      mobOfferReveal:false,
      pageXOffSet:'',
      pageYOffset:''
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
    });
    window.addEventListener("scroll", this.handleIpadReveal);
    this.setState({
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight
    });
    window.addEventListener("scroll", this.handleMobileReveal);
    this.setState({
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight
    });
    window.addEventListener("scroll", this.setInnerHeight);
    
    
}

  componentWillMount() {
    window.removeEventListener("scroll", this.handleReveal);
    window.removeEventListener("scroll", this.handleIpadReveal);
    window.removeEventListener("scroll", this.handleMobileReveal);
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
handleIpadReveal = () =>  {
  if (window.scrollY <= 2500 && this.state.iGalleryReveal === true) {
      this.setState({ iGalleryReveal: false });
  } else if (window.scrollY >= 2500 && this.state.iGalleryReveal !== true) {
      this.setState({ iGalleryReveal: true });
  }
  else if (window.scrollY <= 1200 && this.state.iOfferReveal === true) {
    this.setState({ iOfferReveal: false });
  }
  else if (window.scrollY >= 1210 && this.state.iOfferReveal !== true) {
    this.setState({ iOfferReveal: true });
  }
}
handleMobileReveal = () =>  {
  if (window.scrollY <= 1650 && this.state.mobGalleryReveal === true) {
      this.setState({ mobGalleryReveal: false });
  } else if (window.scrollY >= 1650 && this.state.mobGalleryReveal !== true) {
      this.setState({ mobGalleryReveal: true });
  }
  else if (window.scrollY <= 770 && this.state.mobOfferReveal === true) {
    this.setState({ mobOfferReveal: false });
  }
  else if (window.scrollY >= 780 && this.state.mobOfferReveal !== true) {
    this.setState({ mobOfferReveal: true });
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
  setInnerHeight = () => {
    this.setState({
      pageXOffSet:window.pageXOffset,
      pageYOffset:window.pageYOffset
    });
  }
 


  render() {
      
    return (
      <div style={{fontFamily:'satisfy, cursive', width:'100vw', overflowX:'hidden'}}>
        
        <MediaQuery maxWidth = {767}>
            <MobileHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024} maxWidth = {768}>
            <IpadHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Header scrollFunc={this.scrollTo} toTop={this.scrollToTop} ></Header>
        </MediaQuery>

        
         <h1 style={{
          textAlign:'center', 
          marginTop:'2%', 
          marginBottom:'2%',
          fontWeight:'500', 
          fontSize: '3em'
          }} name="offer">Oferta</h1>

          <MediaQuery maxWidth = {767}>
            <MobileOffer toTop={this.scrollToTop} mobOfferReveal={this.state.mobOfferReveal} positionY={this.state.pageYOffset}/>
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadOffer toTop={this.scrollToTop} iOfferReveal={this.state.iOfferReveal} positionY={this.state.pageYOffset}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Offer toTop={this.scrollToTop} offerReveal={this.state.offerReveal} positionY={this.state.pageYOffset}></Offer> 
        </MediaQuery>
        

        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'3em', paddingTop:'120px'}} name="gallery">Galeria</h1>
        
        <MediaQuery maxWidth = {767}>
            <MobileGallery toTop={this.scrollToTop} galleryReveal={this.state.mobGalleryReveal} />
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadGallery toTop={this.scrollToTop} galleryReveal={this.state.iGalleryReveal}/>
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Gallery  toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}></Gallery>
        </MediaQuery>
          
          
        <h1 style={{textAlign:'center', fontWeight:'500', fontSize:'3em', marginTop:'15vh', marginBottom:'20vh'}} name="contact">Kontakt</h1>
        <MediaQuery maxWidth = {767}>
            <MobileForm toTop={this.scrollToTop}></MobileForm>        
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadForm toTop={this.scrollToTop}></IpadForm>        
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Form toTop={this.scrollToTop}></Form>
        </MediaQuery>
        
        {/* {this.state.apiResponse} */}
        <MediaQuery maxWidth = {767}>
            <MobileFooter/>        
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {991}>
            <IpadFooter/>        
        </MediaQuery>
        <MediaQuery minWidth = {1024}>
            <Footer/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
