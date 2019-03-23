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

const FadeIn = styled.div`
    animation: ${props => props.positionY ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    animation-delay: ${props => props.delay}s ;
    opacity:0;
`;
const FadeIn2 = styled.div`
    animation: ${props => props.positionY  ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    animation-delay: ${props => props.delay}s ;
    opacity:0;
`;
const FadeIn3 = styled.div`
    animation: ${props => props.positionY  ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    animation-delay: ${props => props.delay}s ;
    opacity:0;
`;

const List = styled.h2`
    animation: ${props => props.positionY  ? bounceFromRight : 'none'} 1.5s ease-in-out forwards;
    animation-delay: ${props => props.delay}s ;
    opacity:0;
    font-family: 'Roboto', sans-serif;
`;

const Heading = styled.h2`
    animation: ${props => props.positionY  ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
`;

const Heading2 = styled.h2`
    animation: ${props => props.positionY  ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
`;

const Heading3 = styled.h2`
    animation: ${props => props.positionY ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
`;

const Line = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY ? lineGrow : 'none'} 1s forwards;
`;
const Line2 = styled.div`
    height: 2px;
    animation: ${props => props.positionY ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;    
const Line3 = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY  ? lineGrow : 'none'} 1s forwards;
`;
const Line4 = styled.div`
    height: 2px;
    animation: ${props => props.positionY  ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;  
const Line5 = styled.div`
    height:2px;
    background-color: red;
    animation: ${props => props.positionY  ? lineGrow : 'none'} 1s forwards;
`;
const Line6 = styled.div`
    height: 2px;
    animation: ${props => props.positionY  ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;

const offerStyle = {
    display: 'grid',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '800',
    minWidth: '50%'

}
const offerStyleText ={
    justifyContent:'center',
    alignContent:'center',
}
const pStyle = {
    fontSize:'2em', 
    fontFamily:'Lato, sans-serif', 
    textAlign:'center',
    fontWeight:'300'
    
}

class Offer extends Component {
    constructor(props){
        super(props);
          this.state = {
            revealedFirst:'',
            revealedSecond:'',
            revealedThird:''
          }  
        
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleOfferReveal);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOfferReveal);
    }

    handleOfferReveal = () => {
        let props = this.props.positionY;

        if (props > '825'){
            this.setState({
                revealedFirst:true
            })
        } 
        if (props > '1380'){
            this.setState({
                revealedSecond:true
            })
        }
        if (props > '1855'){
            this.setState({
                revealedThird:true
            })
        };
    }
  
    render() {
        
        const {revealedFirst, revealedSecond, revealedThird} = this.state;
        return (
            <div style={{width:'100%'}}>
                <p style={{...pStyle}}>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                    gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                    najważniejszego dnia w Waszym życiu ?
                    </p>
                    <p style={{...pStyle}}>Nasze czerwone MG pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !</p>

                    <div style={{
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
                                <Heading positionY={revealedFirst}>MG model MGB, rocznik 1977</Heading>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line positionY={revealedFirst}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line2 positionY={revealedFirst}
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
                                    <FadeIn positionY={revealedFirst} delay={0.3}>
                                    <p style={{width:'100%',  textAlign:'center', fontSize:'1em'}}> Z przyjemnością umilamy wszelkie uroczystości wymagające oryginalności, prestiżu i klasy,
                                    takie jak:</p>
                                    </FadeIn>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                        <ul style={{marginTop:'0', fontSize:'0.4em'}}>
                                            <List positionY={revealedFirst} ><li>Śluby</li></List>
                                            <List positionY={revealedFirst} delay={0.7}><li>Sesje fotograficzne</li></List>
                                            <List positionY={revealedFirst} delay={0.8}><li>Reklamy</li></List>
                                            <List positionY={revealedFirst} delay={0.9}><li>Filmy</li></List>
                                            <List positionY={revealedFirst} delay={1}><li>Imprezy okolicznościowe</li></List>
                                            <List positionY={revealedFirst} delay={1.1}><li>Niespodzianki</li></List>
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
                            minHeight:'40vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                 <Heading2 positionY={revealedSecond}>Dojazd</Heading2>
                             </div>
                             <div style={{
                                 ...offerStyle
                             }}>
                                <Line3 positionY={revealedSecond}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center',
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line4 positionY={revealedSecond}
                                    style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText,
                             }}>
                                <FadeIn2 positionY={revealedSecond} delay={0.5}>
                                    <p style={{textAlign:'center', fontSize:'1em'}}>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                    odpowiednią kwotę za dojazd. W sprawie dostępności zachęcamy do skorzystania 
                                    z formularza kontaktowego.
                                </p>
                                </FadeIn2>
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
                            minHeight:'30vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <Heading3 positionY={revealedThird} >Dekoracje i rekwizyty</Heading3>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line5 positionY={revealedThird}
                                    style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line6 positionY={revealedThird}
                                    style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <FadeIn3 positionY={revealedThird} delay={0.5}><p style={{maxWidth:'90%', textAlign:'center', fontSize:'1em'}}>Dysponujemy również dwoma koszykami wiklinowymi o wymiarach aa x bb cm
                                    oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                                    uroczystość. Oferujemy je Młodej Parze GRATIS!
                                </p>
                                </FadeIn3>
                             </div>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Offer;




