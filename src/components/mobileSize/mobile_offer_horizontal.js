import React , { Component }from 'react';
import styled, {keyframes} from 'styled-components';
import {
    animateScroll as scroll,
    scroller
  } from "react-scroll";

import img from '../../resources/images/gearbox_stick.jpg';
import img2 from '../../resources/images/mg_hood.jpg';
import img3 from '../../resources/images/maskaPrzod.jpg';


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
    font-size:0.8em;
`;

const Heading = styled.h2`
    animation: ${props => props.positionY  ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
    font-size:0.5em;
    text-align:center;
`;

const Heading2 = styled.h2`
    animation: ${props => props.positionY  ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
    font-size:0.6em;
`;

const Heading3 = styled.h2`
    animation: ${props => props.positionY ? fadeIn : 'none'} 1.5s ease-in-out forwards;
    opacity:0;
    font-size:0.5em;
    text-align:center;
`;

const Line = styled.div`
    height:1px;
    background-color: red;
    animation: ${props => props.positionY ? lineGrow : 'none'} 1s forwards;
`;
const Line2 = styled.div`
    height: 1px;
    animation: ${props => props.positionY ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;    
const Line3 = styled.div`
    height:1px;
    background-color: red;
    animation: ${props => props.positionY  ? lineGrow : 'none'} 1s forwards;
`;
const Line4 = styled.div`
    height: 1px;
    animation: ${props => props.positionY  ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;  
const Line5 = styled.div`
    height:1px;
    background-color: red;
    animation: ${props => props.positionY  ? lineGrow : 'none'} 1s forwards;
`;
const Line6 = styled.div`
    height: 1px;
    animation: ${props => props.positionY  ? lineGrow2 : 'none'} 0.5s forwards;
    animation-delay:1s;
`;


const offerStyle={
        display:'grid',
        backgroundSize:'cover',
        backgroundPosition:'center',
        fontFamily: 'Roboto, sans-serif',
        // border:'2px solid black'
}
const offerStyleText ={
    justifyContent:'center',
    alignContent:'center',
}
const pStyle = {
    fontSize:'0.9em', 
    fontFamily:'Lato, sans-serif',  
    textAlign:'center',
    fontWeight:'500'
    
}

class MobileOffer extends Component {
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

        if (props > '410'){
            this.setState({
                revealedFirst:true
            })
        } 
        if (props > '1020'){
            this.setState({
                revealedSecond:true
            })
        }
        if (props > '1115'){
            this.setState({
                revealedThird:true
            })
        };
    }
    
    render() {

        const {revealedFirst, revealedSecond, revealedThird} = this.state;

        return (
            <div>
                 <h1 style={{
                    textAlign: 'center',
                    marginTop: '2%',
                    marginBottom: '2%',
                    fontWeight: '500',
                    fontSize: '1.8em',
                    padding: '20px 0 10px 0 '
                }} name="offer">Oferta</h1>

                 <p style={{...pStyle, padding:'10px 30px'}}>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                    gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                    najważniejszego dnia w Waszym życiu ?
                    </p>
                    <p style={{...pStyle, padding:'10px 30px 25px'}}>Nasze czerwone MG pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !</p> 

                    <div style={{
                        // border:'2px solid black',
                        display:'grid',
                        width:'100%',
                        height:'120vh',
                        gridTemplateColumns:'50% 50%',
                        gridRows:'33% 33% 33%',
                        gridGap:'2%'
                    }}>
                    
                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image1})`,
                            maxHeight:'100%'
                            }}>
                        </div>

                        <div style={{
                            ...offerStyle,
                            maxHeight:'100%',
                            height:'40vh'
                            }}>
                            <div style={{
                            ...offerStyle,
                            overflow:'hidden',
                            fontSize:'2em',
                            gridTemplateColumns:'100%',
                            gridTemplateRows:'15% 2% 2% 81%'
                            }}>
                                <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                                }}>
                                <Heading positionY={revealedFirst} style={{padding:'10px'}}>MG model MGB, rocznik 1977</Heading>
                                </div>
                                <div style={{
                                 ...offerStyle,
                                }}>
                                <Line positionY={revealedFirst} style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                             }}>
                                <Line2 positionY={revealedFirst} style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                                <div style={{
                                 ...offerStyle,
                                width:'100%'
                                }}>
                                <div style={{height:'80%', alignItems:'center'}}>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                    <FadeIn positionY={revealedFirst} delay={0.3}><p style={{
                                        width:'100%',  textAlign:'center', fontSize:'0.4em'
                                        }}> Z przyjemnością umilamy wszelkie uroczystości wymagające oryginalności, prestiżu i klasy,
                                    takie jak:</p>
                                    </FadeIn>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                         <ul style={{marginTop:'0', fontSize:'0.33em'}}>
                                         <List positionY={revealedFirst}><li>Śluby</li></List>
                                         <List positionY={revealedFirst} delay={0.7}><li>Sesje fotograficzne</li></List>
                                         <List positionY={revealedFirst} delay={0.9}><li>Reklamy</li></List>
                                         <List positionY={revealedFirst} delay={1.1}><li>Filmy</li></List>
                                         <List positionY={revealedFirst} delay={1.3}><li>Imprezy okolicznościowe</li></List>
                                         <List positionY={revealedFirst} delay={1.5}><li>Niespodzianki</li></List>
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
                            maxHeight:'100%',
                            height:'40vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                 <Heading2 positionY={revealedSecond}>Dojazd</Heading2>
                             </div>
                             <div style={{
                                 ...offerStyle,
                             }}>
                                <Line3 positionY={revealedSecond} style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                             }}>
                                <Line4 positionY={revealedSecond} style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText,
                             }}>
                                <FadeIn2 positionY={revealedSecond} delay={0.5}>
                                <p style={{textAlign:'center', fontSize:'0.45em', padding:'0px 15px'}}>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                    odpowiednią kwotę za dojazd. W sprawie dostępności zachęcamy do skorzystania 
                                    z formularza kontaktowego.
                                </p>
                                </FadeIn2>
                             </div>
                        </div>
                        
                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image2})`,
                            maxHeight:'100%'
                            }}>
                        </div>

                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image3})`,
                            maxHeight:'100%'
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
                            maxHeight:'100%',
                            height:'30vh'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <Heading3 positionY={revealedThird} >Dekoracje i rekwizyty</Heading3>
                             </div>
                             <div style={{
                                 ...offerStyle,
                             }}>
                                <Line5 positionY={revealedThird}style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                             }}>
                                <Line6 positionY={revealedThird} style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <FadeIn3 positionY={revealedThird} delay={0.5}>
                                <p style={{textAlign:'center', fontSize:'0.4em', padding:'0 17px'}}>Dysponujemy również dwoma koszykami wiklinowymi o wymiarach aa x bb cm
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

export default MobileOffer;




