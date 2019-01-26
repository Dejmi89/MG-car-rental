import React , { Component }from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import Fade, {Zoom} from 'react-reveal';
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from "react-scroll";

import img from './resources/images/gearbox_stick.jpg';
import img2 from './resources/images/mg_hood.jpg';
import img3 from './resources/images/maskaPrzod.jpg';

const text1 = 'Mozna troszke pojezdzic... ';
const text2 = 'Mozna takze pofiglowac...';
const text3 = 'Mozna rowniez przygazowac...';

const fadeIn = keyframes`
    from{
        opacity:0.6
        }
    to{
        opacity:1
        }
        `;
const lineGrow = keyframes`
0% {
width: 0;
background-color:transparent;
margin-right:0;
}
100% {
background-color:goldenrod;
width: 18%;
margin-right:40%;
}
`;
const lineGrow2 = keyframes`
0% {
width: 0;
background-color:transparent;
margin-left:0;
}
100% {
background-color:goldenrod;
width: 14%;
margin-left:50%;
}
`;
const bounceFromRight = keyframes`
    0% {
      opacity:0;
    margin-left: 1000%;
    }
    20% {
    margin-left: -150%;
    }
    40% {
    margin-left: 100%;
    }
    60% {
    margin-left: -100%;
    }
    70% {
    margin-left: 50%;
    }
    80% {
    margin-left: -50%;
    }
    90% {
    margin-left: 25%;
    }
    95% {
    margin-left: -25%;
    }
     97% {
    margin-left: 13%;
    }
     99% {
    margin-left: -7%;
    }
   
    100% {
      opacity:1;
    margin-left: 0;
    }
`;

const Cells = [
  
       {
        width: 1,
        height: 2,
        left:1,
        top: 1,
        img: img,
        animation: fadeIn  
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 1,
        img: '',
        animation: '',
        text:text1,
        title: 'Opcja 1'   
    },
    {
        width: 1,
        height: 2,
        left:1,
        top: 3,
        img: '',
        animation: '',
        text: text2,
        title: 'Opcja 2'   
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 3,
        img: img2,
        animation: fadeIn  
    },
    {
        width: 1,
        height: 2,
        left:1,
        top: 5,
        img: img3,
        animation: fadeIn   
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 5,
        img: '',
        animation: '',
        text:text3,
        title:'Opcja 3'   
    }
    
]

const ImageContainerWrapper = styled.div`
        /* border: 2px solid black; */
        width: 100%;
        height: 100%;
        overflow:hidden;
        `;
        
const ImageContainer = styled.div`
        background-image:  url(${props => props.img});
        background-position:center;
        background-size:cover;
        width:100%;
        height:100%;
        animation: ${props => props.animation} 2s;
        /* border: 2px solid black; */
        
    `;

const Line = styled.div`
    height: 1px;
    background-color: goldenrod;
    margin: auto;
    margin-top:-35px;
    animation: ${lineGrow} 0.5s forwards;
`;
const Line2 = styled.div`
    height: 2px;
    margin: auto;
    margin-top:5px;
    animation: ${lineGrow2} 0.5s forwards;
    animation-delay:1s;
`;    
const OfferTitle = styled.div`
    width: 80%;
    font-size:2.2em; 
    margin:auto;
    margin-top:-3%;
    display: flex;
    justify-content: center;
    /* border: 2px solid black; */
    p {
    animation: ${fadeIn} 3s forwards;

    }
`;

class Offer extends Component {
    constructor(props){
        super(props);
          this.state = {
            opacity: '1'
          }  
        
    }

    showHeroes = () => 
    Cells.map((cell, i) => (
        
            <Cell key={i+' offer'}
            width={cell.width} 
            height={cell.height} 
            left={cell.left} 
            top={cell.top} 
            >
                <ImageContainerWrapper>
                    <ImageContainer 
                    img={cell.img}
                    animation={cell.animation && this.props.offerReveal === true ? cell.animation : ''}
                    >
                    
                    <OfferTitle style={{display: cell.text ? 'flex' : 'none', fontFamily:'Arapey, cursive'}}>
                        <p>{cell.title}</p>
                    </OfferTitle>
                    <Line/>
                    <Line2/>
                    <div style={{textAlign:'center', marginTop:'10px', fontSize:'1.5em',fontFamily:'Arapey, cursive' }}>
                        {cell.text ? cell.text : ''}
                    </div>
                    
                    </ImageContainer>
                        
                    
                    
                </ImageContainerWrapper>
                
                </Cell>
        
    ))

    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuint"
        });
      }
    
    render() {
        return (
            <Grid
            name={this.props.name}
                style={{opacity:this.state.opacity}}
                columns={'repeat(2,minmax(max-content,auto))'}
                rows={'repeat(6, minmax(200px, auto))'}
                gap='10px'
                >
            {this.showHeroes()}
            </Grid>
        );
    }
}

export default Offer;




