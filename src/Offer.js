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

const image1 = img;
const image2 = img2;
const image3 = img3;

const pStyle = {
    fontSize:'2em', 
    fontFamily:'Dosis, sans-serif', 
    textAlign:'center',
    fontWeight:'100'
}

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

// const Cells = [
  
//        {
//         width: 1,
//         height: 2,
//         left:1,
//         top: 1,
//         img: '',
//         animation: fadeIn  
//     },
//     {
//         width: 1,
//         height: 2,
//         left:2,
//         top: 1,
//         img: '',
//         animation: '',
//         text:'kajsdhkjashdklajsdlaksdh askdhkasjhdkjashdk askdjaksdaksjdhifsadasd askdj akjsdhkalsjdhkasljdhuh a sudaksdhkass',
//         title: 'Opcja 1'   
//     },
//     {
//         width: 1,
//         height: 2,
//         left:1,
//         top: 3,
//         img: '',
//         animation: '',
//         text: 'asdjahgdsjasgdjkashgdjkasasassagdkajsgdjkashgdjahgdjasgdjhgsd  sadhgajksdhga  djaasdasdas asdasdas asdasshgdjahs',
//         title: 'Opcja 2'   
//     },
//     {
//         width: 1,
//         height: 2,
//         left:2,
//         top: 3,
//         img: '',
//         animation: fadeIn  
//     },
//     {
//         width: 1,
//         height: 2,
//         left:1,
//         top: 5,
//         img: '',
//         animation: fadeIn   
//     },
//     {
//         width: 1,
//         height: 2,
//         left:2,
//         top: 5,
//         img: '',
//         animation: '',
//         text:'asd',
//         title:'Opcja 3'   
//     }
    
// ]

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
    height:2px;
    background-color: red;
    /* margin-top:35px; */
    animation: ${lineGrow} 1s forwards;
`;
const Line2 = styled.div`
    height: 2px;
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
const offerStyle={
        display:'grid',
        // border:'2px solid black',
        backgroundSize:'cover',
        backgroundPosition:'center',
        fontFamily:'Dosis, cursive'
}
const offerStyleText ={
    justifyContent:'center',
    alignContent:'center',

}

class Offer extends Component {
    constructor(props){
        super(props);
          this.state = {
            opacity: '1'
          }  
        
    }

    // showHeroes = () => 
    // Cells.map((cell, i) => (
            
    //         <Cell key={i+' offer'}
    //         width={cell.width} 
    //         height={cell.height} 
    //         left={cell.left} 
    //         top={cell.top} 
    //         >
    //             <ImageContainerWrapper >
    //                 <ImageContainer 
    //                 img={cell.img}
    //                 animation={cell.animation && this.props.offerReveal === true ? cell.animation : ''}
    //                 >
                    
    //                 <OfferTitle style={{display: cell.text ? 'flex' : 'none', fontFamily:'Dosis, cursive'}}>
    //                     <p>{cell.title}</p>
    //                 </OfferTitle>
    //                 <Line/>
    //                 <Line2/>
    //                 <div style={{textAlign:'center',
    //                             justifySelf:'center', 
    //                             marginTop:'10px', 
    //                             fontSize:'1.5em',
    //                             fontFamily:'Dosis, cursive', 
    //                             border:'2px solid black', 
    //                             width:'70%' }}>
    //                     {cell.text ? cell.text : ''}
    //                 </div>
                    
    //                 </ImageContainer>
    //             </ImageContainerWrapper>
                
    //             </Cell>
        
    // ))

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
                                <h2>Opcja 1</h2>
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
                             }}></div>
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
                                <h2>Opcja 2</h2>
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
                             }}></div>
                        </div>
                        
                        <div style={{
                            ...offerStyle,
                            backgroundImage: `url(${image2})`
                            }}>4
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
                                <h2>Opcja 3</h2>
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
                             }}></div>
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




