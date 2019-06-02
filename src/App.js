import React, { Component } from 'react';
import * as Scroll from "react-scroll";
import MediaQuery from 'react-responsive';
import {
  animateScroll as scroll,
  scroller
} from "react-scroll";


import Header from './Header';
import MobileHeader from './components/mobileSize/mobile_header';
import MobileHeaderHorizontal from './components/mobileSize/mobile_header_horizontal';
import IpadHeader from './components/iPadSize/iPad_header';
import IpadHeaderHorizontal from './components/iPadSize/iPad_header_horizontal';
import OfferNew from './Offer_new';
// import Offer from './Offer';
import MobileOffer from './components/mobileSize/mobile_offer';
import MobileOfferHorizontal from './components/mobileSize/mobile_offer_horizontal';
import IpadOffer from './components/iPadSize/iPad_offer';
import IpadOfferHorizontal from './components/iPadSize/iPad_offer_horizontal';
import Gallery from './Gallery';
import MobileGallery from './components/mobileSize/mobile_gallery';
import MobileGalleryHorizontal from './components/mobileSize/mobile_gallery_horizontal';
import IpadGallery from './components/iPadSize/ipad_gallery';
import IpadGalleryHorizontal from './components/iPadSize/ipad_gallery_horizontal';
import Form from '../src/components/form';
import MobileForm from './components/mobileSize/mobile_form';
import MobileFormHorizontal from './components/mobileSize/mobile_form_horizontal';
import IpadForm from './components/iPadSize/iPad_form';
import IpadFormHorizontal from './components/iPadSize/iPad_form_horizontal';
import Footer from './Footer';
import MobileFooter from './components/mobileSize/mobile_footer';
import MobileFooterHorizontal from './components/mobileSize/mobile_footer_horizontal';
import IpadFooter from './components/iPadSize/iPad_footer';
import IpadFooterHorizontal from './components/iPadSize/iPad_footer_horizontal';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      galleryReveal:false,
      iGalleryReveal: false,
      iGalleryHorizontalReveal: false,
      mobGalleryReveal:false,
      offerReveal:false,
      iOfferReveal:false,
      iOfferHorizontalReveal:false,
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
handleIpadHorizontalReveal = () =>  {
  if (window.scrollY <= 2500 && this.state.iGalleryHorizontalReveal === true) {
      this.setState({ iGalleryHorizontalReveal: false });
  } else if (window.scrollY >= 2500 && this.state.iGalleryHorizontalReveal !== true) {
      this.setState({ iGalleryHorizontalReveal: true });
  }
  else if (window.scrollY <= 1200 && this.state.iOfferHorizontalReveal === true) {
    this.setState({ iOfferHorizontalReveal: false });
  }
  else if (window.scrollY >= 1210 && this.state.iOfferHorizontalReveal !== true) {
    this.setState({ iOfferHorizontalReveal: true });
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
        
        <MediaQuery maxWidth = {767} >
            <MobileHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery>
        {/* <MediaQuery minWidth = {667} maxHeight={414}>
            <MobileHeaderHorizontal scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery> */}
        {/* <MediaQuery  maxWidth = {1024}>
            <IpadHeader scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery> */}
        {/* <MediaQuery width = {1024} height = {768}>
            <IpadHeaderHorizontal scrollFunc={this.scrollTo} toTop={this.scrollToTop}/>
        </MediaQuery> */}
        <MediaQuery minWidth = {1025}>
            <Header scrollFunc={this.scrollTo} toTop={this.scrollToTop} ></Header>
        </MediaQuery>

        {/* -------------------Offer------------------------------- */}
          <MediaQuery maxWidth = {767}>
            <MobileOffer toTop={this.scrollToTop} mobOfferReveal={this.state.mobOfferReveal} positionY={this.state.pageYOffset}/>
        </MediaQuery>
        {/* <MediaQuery  maxWidth = {1024}>
            <IpadOffer toTop={this.scrollToTop} iOfferReveal={this.state.iOfferReveal} positionY={this.state.pageYOffset}/>
        </MediaQuery> */}
        {/* <MediaQuery width = {1024} height={768}>
            <IpadOfferHorizontal iOfferHorizontalReveal={this.state.iOfferHorizontalReveal} positionY={this.state.pageYOffset}/>
        </MediaQuery> */}
        <MediaQuery minWidth = {1025}>
            <OfferNew toTop={this.scrollToTop} offerReveal={this.state.offerReveal} positionY={this.state.pageYOffset}></OfferNew> 
        </MediaQuery>
        

        {/* -------------------Gallery----------------------------- */}
        
        <MediaQuery maxWidth = {767}>
            <MobileGallery toTop={this.scrollToTop} galleryReveal={this.state.mobGalleryReveal} />
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {1024}>
            <IpadGallery toTop={this.scrollToTop} galleryReveal={this.state.iGalleryReveal}/>
        </MediaQuery>
        {/* <MediaQuery width = {1024} height = {768}>
            <IpadGalleryHorizontal toTop={this.scrollToTop} galleryReveal={this.state.iGalleryReveal}/>
        </MediaQuery> */}
        <MediaQuery minWidth = {1025}>
            <Gallery  toTop={this.scrollToTop} galleryReveal={this.state.galleryReveal}></Gallery>
        </MediaQuery>
          
          
        {/* -------------------Form----------------------------- */}

        <MediaQuery maxWidth = {767}>
            <MobileForm toTop={this.scrollToTop}></MobileForm>        
        </MediaQuery>
        <MediaQuery minWidth = {768} maxWidth = {1024}>
            <IpadForm toTop={this.scrollToTop}></IpadForm>        
        </MediaQuery>
        {/* <MediaQuery width = {1024} height = {768}>
            <IpadFormHorizontal toTop={this.scrollToTop}></IpadFormHorizontal>        
        </MediaQuery> */}
        <MediaQuery minWidth = {1025}>
            <Form toTop={this.scrollToTop}></Form>
        </MediaQuery>
        


        {/* -------------------Footer----------------------------- */}
        
        {/* {this.state.apiResponse} */}
        <MediaQuery maxWidth = {767}>
            <MobileFooter/>        
        </MediaQuery>
        <MediaQuery  maxWidth = {1024}>
            <IpadFooter/>        
        </MediaQuery>
        {/* <MediaQuery width = {1024} height  = {768}>
            <IpadFooterHorizontal/>        
        </MediaQuery> */}
        <MediaQuery minWidth = {1025}>
            <Footer/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
