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

const Line = styled.div`
    height:2px;
    background-color: red;
    animation: ${lineGrow} 1s forwards;
`;
const Line2 = styled.div`
    height: 2px;
    animation: ${lineGrow2} 0.5s forwards;
    animation-delay:1s;
`;    

const offerStyle={
        display:'grid',
        backgroundSize:'cover',
        backgroundPosition:'center',
        fontFamily:'Dosis, cursive',
        
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
                            gridTemplateRows:'15% 2% 2% 81%'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <h2>MG model MGB, rocznik 1977</h2>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line2 style={{
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
                                    <p style={{width:'100%',  textAlign:'center', fontSize:'1.3em'}}> Z przyjemnością umilamy wszelkie uroczystości wymagające oryginalności, prestiżu i klasy,
                                    takie jak:</p>
                                    <div style={{display:'grid', justifyContent:'center'}}>
                                        <ul style={{marginTop:'0'}}>
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
                            gridTemplateRows:'15% 2% 2% 81%'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <h2>Dojazd</h2>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line2 style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText,
                             }}>
                                <p style={{textAlign:'center', fontSize:'1.3em'}}>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
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
                            gridTemplateRows:'15% 2% 2% 81%'
                            }}>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <h2>Dekoracje i rekwizyty</h2>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line style={{
                                    justifySelf:'center', 
                                    alignSelf:'center'
                                    }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                //  ...offerStyleText
                             }}>
                                <Line2 style={{
                                    justifySelf:'center',
                                    alignSelf:'center'
                                }}/>
                             </div>
                             <div style={{
                                 ...offerStyle,
                                 ...offerStyleText
                             }}>
                                <p style={{textAlign:'center', fontSize:'1.3em'}}>Dysponujemy również dwoma koszykami wiklinowymi o wymiarach aa x bb cm
                                    oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                                    uroczystość. Oferujemy je Młodej Parze GRATIS!
                                </p>
                             </div>
                        </div>
                        </div>
                    </div>
            {/* <Grid
            name={this.props.name}
                style={{opacity:this.state.opacity, marginTop:'5%'}}
                columns={'repeat(2,minmax(max-content,auto))'}
                rows={'repeat(6, minmax(200px, auto))'}
                gap='10px'
                >
            {this.showHeroes()}
            </Grid> */}
            </div>
        );
    }
}

export default Offer;




