import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/wedding/0023_M&D_1080p.jpg';
import img1 from './resources/images/wedding/mgPNG/photos/1.png';
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
import img14 from './resources/images/wedding/mgPNG/photos/14.png';
import img15 from './resources/images/wedding/mgPNG/photos/15.png';
import img16 from './resources/images/wedding/mgPNG/photos/16.png';
import img17 from './resources/images/wedding/mgPNG/photos/17.png';


const flipImageY = keyframes`
    
    100% {
        transform: rotateY(180deg);
        
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
    width:93%;
    height:93%;
    display:grid;
    justify-self: center;
    align-self:center;
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    background-image:url(${props => props.img});
    background-size:cover;
    background-position:center;
    /* margin:${props => props.margin}; */
    /* opacity:0; */
    /* animation: ${props => props.animation} 1s ; */
    /* animation-delay: ${props => props.delay}s; */
    /* animation-fill-mode:${props => props.fillMode}; */
   
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
                    // border:'2px solid black'
                }}>
                    Oferta
                </div>
                <div className='photo' style={{
                    width:'80%',
                    height:'85%',
                    gridColumn:'1/2',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(53,1.85%)',
                    gridTemplateRows:'repeat(36,2.77%)',
                    display:'grid',
                    // border:'2px solid black',
                    justifySelf:'center',
                    alignSelf:'center',
                    justifyContent:'center',
                    alignContent:'center'                   
                }}>
                    
                    <PhotoGridContainer img={img1} gridColumn={'1/13'} gridRow={'1/11'} margin={'0% 0 0 0%'}  animation={fadeIn} delay={1.2} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img2} gridColumn={'1/13'} gridRow={'11/21'} margin={'8% 0 0 -9%'}  animation={fadeIn} delay={2.1} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img3} gridColumn={'1/13'} gridRow={'21/25'} margin={'7% 10% 0 8%'} animation={fadeIn} delay={1.4} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img4} gridColumn={'4/12'} gridRow={'25/29'} margin={'12% 0 0 13%'} animation={fadeIn} delay={1.6} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img5} gridColumn={'4/12'} gridRow={'29/32'} margin={'18% -24% 0 0%'}  animation={fadeIn} delay={1.3} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img6} gridColumn={'6/12'} gridRow={'32/34'}   margin={'31% 0 0 27%'}  animation={fadeIn} delay={1.9} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img7} gridColumn={'13/28'} gridRow={'1/21'} margin={'4% 0 0 8%'} animation={fadeIn} delay={1.9} fillMode={'forwards'}/>
                    <PhotoGridContainer img={img8} gridColumn={'13/28'} gridRow={'21/25'} margin={'4% 0 0 8%'}   animation={fadeIn} delay={1.3} fillMode={'infinite'}/>
                    <PhotoGridContainer img={img9} gridColumn={'13/47'} gridRow={'25/32'} margin={'3% 0 0 0%'} animation={flipImageY} delay={1.4} fillMode={'infinite'}/>
                    <PhotoGridContainer img={img10} gridColumn={'13/47'} gridRow={'32/34'} margin={'3% 0 0 0%'} animation={flipImageY} delay={1.5} fillMode={'infinite'}/>
                    <PhotoGridContainer img={img11} gridColumn={'28/54'} gridRow={'1/9'} margin={'4% 0 0 8%'}animation={fadeIn} delay={1.6} delay={1.5} fillMode={'infinite'}/>
                    <PhotoGridContainer img={img12} gridColumn={'28/44'} gridRow={'9/25'} margin={'2% 0 2% 21%'}animation={flipImageY} delay={1.7} fillMode={'infinite'}/>
                    <PhotoGridContainer img={img13} gridColumn={'45/49'} gridRow={'9/25'} margin={'-10% 0 0 21%'}animation={flipImageY} delay={1.8}fillMode={'reverse'}/>
                    <PhotoGridContainer img={img14} gridColumn={'49/54'} gridRow={'9/25'} margin={'-5% 0 0 47%'}animation={flipImageY} delay={1.8}fillMode={'reverse'}/>
                    <PhotoGridContainer img={img15} gridColumn={'47/54'} gridRow={'25/30'} margin={'4% 0 0 8%'}animation={flipImageY} delay={1.8}fillMode={'reverse'}/>
                    <PhotoGridContainer img={img16} gridColumn={'47/49'} gridRow={'30/34'} margin={'30% 0 0 -20%'}animation={flipImageY} delay={1.8}fillMode={'reverse'}/>
                    <PhotoGridContainer img={img17} gridColumn={'49/54'} gridRow={'30/34'} margin={'4% 0 0 8%'}animation={flipImageY} delay={1.8}fillMode={'reverse'}/> 
                    
                    

                    
                </div>
                <div className ='intro_text' style={{
                    width:'80%',
                    height:'80%',
                    justifySelf:'start',
                    alignSelf:'center',
                    gridColumn:'2/3',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(10,10%)',
                    gridTemplateRows:'repeat(10,10%)',
                    display:'grid',
                    // border:'2px solid black'
                }}>
                    <div style={{
                        display:'grid',
                        // border:'2px solid black',
                        gridColumn:'1/11',
                        gridRow:'3/10'
                        
                    }}>
                        <p style={{ 
                            padding:'5%',
                            textAlign:'justify',
                            fontFamily:'Josefin Sans, sans-serif',
                            fontSize:'1.5em' 
                            }}>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                        gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                        najważniejszego dnia w Waszym życiu ?  Nasze czerwone MG, model MGB rocznik 1977 pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !
                        </p>
                    </div>
                    <div style={{
                            display:'grid',
                            // border:'2px solid black',
                            gridColumn:'1/11',
                            gridRow:'1/3',
                            alignContent:'center'
                            
                    }}>
                        <p style={{
                            textAlign:'center',
                            fontFamily:'Josefin Sans, sans-serif',
                            fontSize:'3em'
                        }}>MG MGB 1977'</p>
                    </div>
                </div>
            </div>

            
           
        );
    }
}

export default OfferNew;