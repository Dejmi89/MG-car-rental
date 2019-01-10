import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Fade, {Zoom} from 'react-reveal';
import {Grid, Cell} from 'styled-css-grid';
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from "react-scroll";
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

const fadeIn = keyframes`
    from{
        opacity:1
        }
    to{
        opacity:0
        }
`;

const shineEffect = keyframes`
  0% {
    background-color:white;
    transform: translateX(-200px) skewX(-30deg);
    opacity:0;
    width: 0;
    height:100%;
    }
  20%{
    opacity:0.3;
    
  }
  100% {
    
    transform: translateX(100px) skewX(-30deg);
    opacity:0;
    width:100%;
    background-color:white;
    height:100%;
  }
`;

const Cells = [
    
    {
        width: 3,
        height: 3,
        left:2,
        top: 1,
        img: img2,
        animation: shineEffect,
        animationDelay: 1   
    },
    {
        width: 1,
        height: 1,
        left: 2,
        top: 4,
        img: img3,
        animation: shineEffect,
        animationDelay:2
    },
    {
        width: 1,
        height: 1,
        left: 3,
        top: 4,
        img: img4,
        animation: shineEffect,
        animationDelay:1
    },
    {
        width: 1,
        height: 1,
        left: 4,
        top: 4,
        img: img5,
        animation: shineEffect,
        animationDelay:2
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 1,
        img: img6,
        animation: shineEffect,
        animationDelay:3
    },
    {
        width:1 ,
        height: 1,
        left: 8,
        top: 1,
        img: img7,
        animation: shineEffect,
        animationDelay:2
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 1,
        img: img8,
        animation: shineEffect,
        animationDelay:1
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 3,
        img: img9,
        animation: shineEffect,
        animationDelay:3 
    },
    {
        width: 2,
        height: 2,
        left: 7,
        top: 2,
        img: img10,
        animation: shineEffect,
        animationDelay: 1
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 4,
        img: img11,
        animation: shineEffect,
        animationDelay:2 
    },
    {
        width: 1,
        height: 1,
        left: 8,
        top: 4,
        img: img1,
        animation: shineEffect,
        animationDelay:4 
    },
    
]

const ImageContainerWrapper = styled.div`
        /* border: 2px solid black; */
        width: 100%;
        height: 100%;
        `;

const ImageContainer = styled.div`
        background-image:  url(${props => props.img});
        background-position:center;
        background-size:cover;
        width:100%;
        height:100%;
        overflow:hidden;
        &:hover{
            opacity:0.7; 
        }
    `;

const SquareToAnimate2 = styled.div`
     animation: ${props => props.isOn === true ? shineEffect : 'none'} 2s forwards;
     `;

const ClickedImageWrapper = styled.div`
    position:fixed;
    z-index:1;
    width:50%;
    height:50vh;
    top:10%;
    left:10%;
    background-color:grey;
`;

const ClickedImage = styled.div`
    /* position:fixed; */
    top: 0;
    left: 0;
    z-index:1;
    width: 50%;
    height: 50vh;
    border: 2px solid black;
    background-color:green;
    /* background-image: ${props => `url(${props.foto})`}; */
    background-position:center;
        img{
            width:50%;
            height:50%;
        }
    `;

class Gallery extends Component {
    constructor(props){
        super(props);
          this.state = {
            currentIndex: null,
            // isOn: false
          }        
    }
    fireShineEffect = () => {
        this.setState({
            isOn:!this.state.isOn
        })
    }
   
    openModal = (e,index) => {
        this.setState({
            currentIndex: index
        })
    }

    closeModal = (e) => {
        if (e !== undefined){
            e.preventDefault();
        }
        this.setState({
            currentIndex: null
        })
    }
   
     showHeroes = () => 
        Cells.map((cell, i) => (
            
                <Cell key={i}
                width={cell.width} 
                height={cell.height} 
                left={cell.left} 
                top={cell.top} 
                onClick={(e) => this.openModal(e,i)} 
                >
                        <ImageContainer img={cell.img} key={cell.img}>
                            {/* <SquareToAnimate2 
                            isOn={this.state.isOn}
                            animationDelay={cell.animationDelay}
                            /> */}
                        </ImageContainer>
                    
                </Cell>
            
        ))
    
    render() {
        return (
            // <Fade onReveal={this.fireShineEffect}> ---> powoduje miganie modala
                
                <div>
                    <Grid
                        name={this.props.name}
                        style={{opacity:this.state.opacity}}
                        columns={'repeat(9,minmax(max-content,auto))'}
                        rows={'repeat(6, minmax(150px, auto))'}
                        gap='5px'
                    >
            
                        {this.showHeroes()} 
                        
                    </Grid>
                    <GalleryModal 
                        closeModal={this.closeModal} 
                        imgSrc={this.state.currentIndex === null ? '' :Cells[this.state.currentIndex].img}
                         />
                </div>    
                
            
            // </Fade>
            
        );
    }
}

export default Gallery;



class GalleryModal extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    
    render() {
        const {closeModal, imgSrc } = this.props;
       

        return (
            <div>
                <ClickedImageWrapper onClick={closeModal}>
                    <ClickedImage>
                        <img src = {imgSrc} alt='carImage' />
                    </ClickedImage>
                </ClickedImageWrapper>
            </div>
        );
    }
}

