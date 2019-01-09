import React, { Component } from 'react';
import img1 from './resources/images/wnetrzeAuta.jpg';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';
import img4 from './resources/images/maskaPrzod.jpg';
import img5 from './resources/images/mg_hood.jpg';
import img6 from './resources/images/steering_wheel.jpg';
import img7 from './resources/images/pexels-photo.jpg';
import img8 from './resources/images/mercedes_garage.jpg';
import img9 from './resources/images/mercedes_front.jpg';
import img10 from './resources/images/jaguar-oldtimer-red-auto-163224.jpeg';
import img11 from './resources/images/gearbox_stick.jpg';

class NewGallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentIndex: null
        }
    }
    renderImageContent(src, index) {
        return (
          <div onClick={this.openModal(e, index)}>
            <img src={src} key={src} />
          </div>
        ) 
      }

      openModal = (e, index) => {
        this.setState ({ currentIndex: index });
      }
      
      closeModal = (e) => {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState ({ currentIndex: null });
      }
      findPrev = (e) => {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex -1
        }));
      }
      findNext = (e) => {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      }

      
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewGallery;
