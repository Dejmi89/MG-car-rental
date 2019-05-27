import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/wedding/0023_M&D_1080p.jpg';
import img1 from './resources/images/wedding/mgPNG/photos/1_.png';
import img2 from './resources/images/wedding/mgPNG/photos/2.png';
import img3 from './resources/images/wedding/mgPNG/photos/3.png';
import img4 from './resources/images/wedding/mgPNG/photos/4.png';
import img5 from './resources/images/wedding/mgPNG/photos/5.png';
import img6 from './resources/images/wedding/mgPNG/photos/6.png';
import img7 from './resources/images/wedding/mgPNG/photos/7.png';
import img8 from './resources/images/wedding/mgPNG/photos/8.png';
import img9 from './resources/images/wedding/mgPNG/photos/9.png';
import img10 from './resources/images/wedding/mgPNG/photos/10.png';
import img11 from './resources/images/wedding/mgPNG/photos/11.png';
import img12 from './resources/images/wedding/mgPNG/photos/12.png';
import img13 from './resources/images/wedding/mgPNG/photos/13.png';


const flipImageY = keyframes`
    
    100% {
        transform: rotateY(360deg);
        
    }
`;
const flipImageX = keyframes`
    
    100% {
        transform: rotateX(360deg);
        opacity: 1;
    }
`;
const fadeIn = keyframes`
    
    100% {
        opacity: 1;
    }
`;

const FadeIn = styled.div`
    animation: fadeIn 2s forwards; 

    @keyframes fadeIn {
        from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
    }
    
`;

const PhotoGridContainer = styled.div`
    display:grid;
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    background-image:url(${props => props.img});
    background-size:cover;
    background-position:center;
    margin:${props => props.margin};
    opacity:0;
    animation: ${props => props.animation} 1s forwards;
    animation-delay: ${props => props.delay}s;
   
`;

class OfferNew extends Component {
    constructor(props){
        super(props);
          this.state = {
            revealedFirst:''
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

        if (props > '600'){
            this.setState({
                revealedFirst:true
            })
        } 
        
    }
  

    render() {

        const {revealedFirst} = this.state;

        return (
            <div style={{
                width:'100%',
                height:'100vh',
                gridTemplateColumns:'50% 50%',
                gridTemplateRows:'repeat(10,10%)',
                display:'grid',
            }}>
                <div className="title" style={{
                    display:'grid',
                    gridColumn:'1/3',
                    gridRow:'1/3',
                    fontSize:'3em',
                    textAlign:'center',
                    alignSelf:'center',
                    border:'2px solid black'
                }}>
                    Oferta
                </div>
                <div className='photo' style={{
                    width:'80%',
                    height:'85%',
                    gridColumn:'1/2',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(53,1.88%)',
                    gridTemplateRows:'repeat(40,2.5%)',
                    display:'grid',
                    // border:'2px solid black',
                    justifySelf:'center',
                    alignSelf:'center'                    
                }}>
                    
                    <PhotoGridContainer img={img1} gridColumn={'12/31'} gridRow={'3/30'} margin={'4%'}  animation={fadeIn} delay={1.2}/>
                    <PhotoGridContainer img={img2} gridColumn={'2/11'} gridRow={'11/41'} margin={'4%'}  animation={fadeIn} delay={2.1}/>
                    <PhotoGridContainer img={img3} gridColumn={'12/31'} gridRow={'31/41'} margin={'4%'} animation={fadeIn} delay={1.4}/>
                    <PhotoGridContainer img={img4} gridColumn={'32/42'} gridRow={'18/31'} margin={'4%'} animation={fadeIn} delay={1.6}/>
                    <PhotoGridContainer img={img5} gridColumn={'32/49'} gridRow={'11/18'} margin={'4%'}  animation={fadeIn} delay={1.3}/>
                    <PhotoGridContainer img={img6} gridColumn={'32/49'} gridRow={'3/11'}   margin={'4%'}  animation={fadeIn} delay={1.9}/>
                    <PhotoGridContainer img={img7} gridColumn={'43/49'} gridRow={'18/37'} margin={'4%'} animation={fadeIn} delay={1.9}/>
                    <PhotoGridContainer img={img8} gridColumn={'42/49'} gridRow={'38/41'} margin={'4%'}   animation={fadeIn} delay={1.3}/>
                    <PhotoGridContainer img={img9} gridColumn={'12/49'} gridRow={'1/4'} margin={'4%'} animation={fadeIn} delay={1.4}/>
                    <PhotoGridContainer img={img10} gridColumn={'49/52'} gridRow={'16/41'} margin={'4% 0 0 8%'} animation={fadeIn} delay={1.5}/>
                    {/* <PhotoGridContainer img={img11} gridColumn={'52/54'} gridRow={'16/41'} margin={'3%'}animation={fadeIn} delay={1.6}/> */}
                    <PhotoGridContainer img={img12} gridColumn={'49/54'} gridRow={'1/16'} margin={'4%'}animation={fadeIn} delay={1.7}/>
                    <PhotoGridContainer img={img13} gridColumn={'4/11'} gridRow={'4/11'} margin={'4%'}animation={fadeIn} delay={1.8}/>
                    
                    

                    
                </div>
                <div className ='intro_text' style={{
                    width:'80%',
                    height:'80%',
                    justifySelf:'center',
                    alignSelf:'center',
                    gridColumn:'2/3',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(10,10%)',
                    gridTemplateRows:'repeat(10,10%)',
                    display:'grid',
                    border:'2px solid black'
                }}></div>
            </div>

            
           
        );
    }
}

export default OfferNew;