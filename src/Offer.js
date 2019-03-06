import React , { Component }from 'react';
import styled, {keyframes} from 'styled-components';
import {
    animateScroll as scroll,
    scroller
  } from "react-scroll";

import img from './resources/images/gearbox_stick.jpg';
import img2 from './resources/images/mg_hood.jpg';
import img3 from './resources/images/maskaPrzod.jpg';

const image1 = img;
const image2 = img2;
const image3 = img3;

const fadeIn = keyframes`
    from{
        opacity:0
    }
    to{
        opacity:1
        }
`;

const lineGrow = keyframes`
0% {
width: 0;
background-color:transparent;
margin-right:-90%;
}
100% {
background-color:goldenrod;
width: 28%;

}
`;
const lineGrow2 = keyframes`
0% {
width: 0;
background-color:transparent;
margin-left:-50%;
}
100% {
background-color:goldenrod;
width: 14%;
margin-left:20%;
}
`;
const bounceFromRight = keyframes`
    0% {
        opacity:0;
       right:-20%;
    }
    30% {
       right:20%;
    }
    60% {
       right:-5%;
       opacity:0.4;
    }
    
    100% {
        opacity:1;
      right: 12%;
    }
`;
const bounceFromLeft = keyframes`
    0% {
        opacity:0;
       left:-20%;
    }
    30% {
       left:30%;
    }
    60% {
       left: 5%;
       opacity:0.4;
    }
    
    100% {
        opacity:1;
      left: 20%;
    }
`;


const Heading = styled.h2`
    animation: ${props => props.positionY >= '825' ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    position:absolute;
    right:-30%;
`;

const Heading2 = styled.h2`
    animation: ${props => props.positionY >= '1380' ? bounceFromLeft : 'none'} 1.5s ease-in-out forwards;
    position:absolute;
    left:-30%;
`;

const Heading3 = styled.h2`
    animation: ${props => props.positionY >= '1555' ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    position:absolute;
    right:-30%;
`;

const Line = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY >= '825' ? lineGrow : 'none'} 1s forwards;
`;
const Line2 = styled.div`
    height: 2px;
    animation: ${props => props.positionY >= '825' ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;    
const Line3 = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY >= '1380' ? lineGrow : 'none'} 1s forwards;
`;
const Line4 = styled.div`
    height: 2px;
    animation: ${props => props.positionY >= '1380' ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;  
const Line5 = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY >= '1755' ? lineGrow : 'none'} 1s forwards;
`;
const Line6 = styled.div`
    height: 2px;
    animation: ${props => props.positionY >= '1755' ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;

const offerStyle = {
    display: 'grid',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Dosis, cursive',
    minWidth: '50%'

}
const offerStyleText ={
    justifyContent:'center',
    alignContent:'center',
}
const pStyle = {
    fontSize:'2em', 
    fontFamily:'Work Sans, sans-serif', 
    textAlign:'center',
    fontWeight:'500'
    
}

class Offer extends Component {
    constructor(props){
        super(props);
          this.state = {
            opacity: '1'
          }  
        
    }
    
    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuint"
        });
      }
    
    render() {
        const positionY = this.props.positionY;

        return (
            <div>
                <p style={{...pStyle}}>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                    gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                    najważniejszego dnia w Waszym życiu ?
                    </p>
                    <p style={{...pStyle}}>Nasze czerwone MG pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !</p>

                    <div style={{
                        // border:'2px solid black',
                        display:'grid',
                        width:'100%',
                        height:'150vh',
                        gridTemplateColumns:'50% 50%',
                        gridRows:'33% 33% 33%',
                        gridGap:'2%'
                    }}>
                    
                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image1})`,
                            
                            }}>
                        </div>

                        <div style={{
                            ...offerStyle
                            }}>
                            <div style={{
                            ...offerStyle,
                            overflow:'hidden',
                            fontSize:'2em',
                            gridTemplateColumns:'100%',
                            gridTemplateRows:'15% 2% 2% 81%',
                            minHeight:'50vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <Heading positionY={this.props.positionY}>MG model MGB, rocznik 1977</Heading>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line2 positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText,
                                width:'90%'
                             }}>
                                <div style={{height:'80%'}}>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                    <p style={{width:'100%',  textAlign:'center', fontSize:'1em'}}> Z przyjemnością umilamy wszelkie uroczystości wymagające oryginalności, prestiżu i klasy,
                                    takie jak:</p>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                        <ul style={{marginTop:'0', fontSize:'0.8em'}}>
                                            <li>Śluby</li>
                                            <li>Sesje fotograficzne</li>
                                            <li>Reklamy</li>
                                            <li>Filmy</li>
                                            <li>Imprezy okolicznościowe</li>
                                            <li>Niespodzianki</li>
                                         </ul>
                                    </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        </div>

                        <div style={{
                            ...offerStyle,
                            overflow:'hidden',
                            fontSize:'2em',
                            gridTemplateColumns:'100%',
                            gridTemplateRows:'15% 2% 2% 81%',
                            minHeight:'50vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                 <Heading2 positionY={this.props.positionY}>Dojazd</Heading2>
                             </div>
                             <div style={{
                                 ...offerStyle
                             }}>
                                <Line3 positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center',
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line4 positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText,
                             }}>
                                <p style={{textAlign:'center', fontSize:'1em'}}>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                    odpowiednią kwotę za dojazd. W sprawie dostępności zachęcamy do skorzystania 
                                    z formularza kontaktowego.
                                </p>
                             </div>
                        </div>
                        
                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image2})`
                            }}>
                        </div>

                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image3})`
                            }}>
                        </div>

                        <div style={{
                            ...offerStyle
                            }}>
                            <div style={{
                            ...offerStyle,
                            overflow:'hidden',
                            fontSize:'2em',
                            gridTemplateColumns:'100%',
                            gridTemplateRows:'15% 2% 2% 81%',
                            minHeight:'50vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <Heading3 positionY={this.props.positionY} >Dekoracje i rekwizyty</Heading3>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line5 positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line6 positionY={this.props.positionY}
                                    style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <p style={{maxWidth:'90%', textAlign:'center', fontSize:'1em'}}>Dysponujemy również dwoma koszykami wiklinowymi o wymiarach aa x bb cm
                                    oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                                    uroczystość. Oferujemy je Młodej Parze GRATIS!
                                </p>
                             </div>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Offer;




