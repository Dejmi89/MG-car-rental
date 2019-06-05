import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import img from '../../resources/images/wedding/0023_M&D_1080p.jpg';
import img1 from '../../resources/images/wedding/mgPNG/photos/1.png';
import img2 from '../../resources/images/wedding/mgPNG/photos/2.png';
import img3 from '../../resources/images/wedding/mgPNG/photos/3.png';
import img4 from '../../resources/images/wedding/mgPNG/photos/4.png';
import img5 from '../../resources/images/wedding/mgPNG/photos/5.png';
import img6 from '../../resources/images/wedding/mgPNG/photos/6.png';
import img7 from '../../resources/images/wedding/mgPNG/photos/7.png';
import img8 from '../../resources/images/wedding/mgPNG/photos/8.png';
import img9 from '../../resources/images/wedding/mgPNG/photos/9.png';
import img10 from '../../resources/images/wedding/mgPNG/photos/10.png';
import img11 from '../../resources/images/wedding/mgPNG/photos/11.png';
import img12 from '../../resources/images/wedding/mgPNG/photos/12.png';
import img13 from '../../resources/images/wedding/mgPNG/photos/13.png';
import img14 from '../../resources/images/wedding/mgPNG/photos/14.png';
import img15 from '../../resources/images/wedding/mgPNG/photos/15.png';
import img16 from '../../resources/images/wedding/mgPNG/photos/16.png';
import img17 from '../../resources/images/wedding/mgPNG/photos/17.png';


const flipImageY = keyframes`
    
    100% {
        transform: rotateY(360deg);
        opacity:1;
        
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
    width:${props => props.width}%;
    height: ${props => props.height}%;
    display:grid;
    justify-self: center;
    align-self:center;
    grid-template-columns: repeat(8,12.5%);
    grid-template-rows: repeat(8,12.5%);
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    background-image:url(${props => props.img});
    background-size:cover;
    background-position:center;
    margin:${props => props.margin};
    opacity:0;
    /* animation: ${props => props.animation} 1s forwards; */
    animation: ${props => props.offerReveal === true ? props.animation : 'none'} 1s forwards ;
    animation-delay: ${props => props.delay}s;
        
   
`;

const PhotoGridContainerOfferText = styled.div`
    width:100%;
    height: 100%;
    display:grid;
    grid-column:1/9;
    grid-row:1/9;
    grid-template-columns: repeat(8,12.5%);
    grid-template-rows: repeat(8,12.5%);
    justify-content:center;
    justify-self: center;
    align-self:center;
    opacity:0;
    background-color: #bd4f6c;
    background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%);
    font-family:Josefin Sans, sans-serif ;
    color:white;
    animation: ${props => props.offerReveal === true ? props.animation : 'none'} 1s forwards ease-out ;
    animation-delay: ${props => props.delay}s;
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

        if (props > '450'){
            this.setState({
                revealedFirst:true
            })
        } 
        
    }
  

    render() {

        const {revealedFirst} = this.state;
        

        return (
            <div className='offer' style={{
                width:'100%',
                height:'100vh',
                gridTemplateColumns:'50% 50%',
                gridTemplateRows:'repeat(10,10%)',
                display:'grid',
            }}>
                <div className="title" style={{
                    display:'grid',
                    gridColumn:'1/3',
                    gridRow:'1/2',
                    fontSize:'1.8em',
                    textAlign:'center',
                    alignSelf:'center',
                    // border:'2px solid black'
                }}>
                    Oferta
                </div>
                <div className='photo' style={{
                    width:'90%',
                    height:'90%',
                    gridColumn:'1/3',
                    gridRow:'5/11',
                    gridTemplateColumns:'repeat(53,1.85%)',
                    gridTemplateRows:'repeat(36,2.77%)',
                    display:'grid',
                    // border:'2px solid black',
                    justifySelf:'center',
                    alignSelf:'center',
                    justifyContent:'center',
                    alignContent:'center'                   
                }}>
                    
                    <PhotoGridContainer offerReveal={revealedFirst} img={img1} gridColumn={'1/13'} gridRow={'1/11'} width={100} height={100} margin={'0% 0 17% -6%'}  animation={fadeIn} delay={0.2} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img2} gridColumn={'1/13'} 
                                        gridRow={'11/21'} width={100} height={100} margin={'0% 0 0 -19%'}  
                                        animation={fadeIn} delay={1.1} fillMode={'forwards'}>
                        
                    </PhotoGridContainer>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img3} gridColumn={'1/13'} gridRow={'21/25'} width={95} height={95} margin={'7% 22% 0 8%'} animation={fadeIn} delay={2.4} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img4} gridColumn={'4/12'} gridRow={'25/29'} width={100} height={90} margin={'15% 0 0-3%'} animation={flipImageX} delay={2.6} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img5} gridColumn={'4/12'} gridRow={'29/32'} width={100} height={100} margin={'18% -0% 0 0%'}  animation={fadeIn} delay={2.3} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img6} gridColumn={'6/12'} gridRow={'32/34'} width={100} height={93} margin={'31% 0 0 0%'}animation={fadeIn} delay={0.9} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img7} gridColumn={'13/28'} 
                                        gridRow={'1/21'} width={100} height={94} margin={'-15% 0 0 8%'} 
                                        animation={fadeIn} delay={1.9} fillMode={'forwards'}>
                        <PhotoGridContainerOfferText className="okazje" offerReveal={revealedFirst} animation={flipImageY} delay={1.9}>
                                <p style={{textAlign:'center', alignSelf:'center' ,paddingTop:'10%', display:'grid', gridColumn:'1/9', gridRow:'1/2', fontSize:'1.1em'}}>Okazje</p>
                            <p style={{textAlign:'center', padding: '0 4%', display:'grid', gridColumn:'1/9', gridRow:'2/4', fontSize:'0.5em'}}>
                             Z przyjemnością umilamy wszelkie uroczystości, które wymagają oryginalności, prestiżu i klasy,
                                    takie jak :
                            </p>   
                            <div style={{
                                display:'grid', 
                                gridColumn:'1/9', 
                                gridRow:'4/9', 
                                listStyle:'none', 
                                justifyContent:'center', 
                                alignItems:'center',
                                padding:'15% 5%',
                                fontSize:'0.5em'}}>
                                    <li>- Śluby</li>
                                    <li>- Sesje fotograficzne</li>
                                    <li>- Reklamy</li>
                                    <li>- Filmy</li>
                                    <li>- Imprezy okolicznościowe</li>
                                    <li>- Niespodzianki</li>
                            </div>
                        </PhotoGridContainerOfferText>    
                    </PhotoGridContainer>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img8} gridColumn={'13/28'} gridRow={'21/25'} width={100} height={100} margin={'-14% 0 0 8%'} animation={fadeIn} delay={0.3} fillMode={'forwards'}
                                        style={{backgroundPosition:'top left'}}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img9} gridColumn={'13/47'} 
                                        gridRow={'25/32'} width={100} height={100} margin={'3% 0 0 0%'} 
                                        animation={fadeIn} delay={1.4} fillMode={'forwards'}>
                        <PhotoGridContainerOfferText className="rekwizyty" offerReveal={revealedFirst} animation={flipImageX} delay={2.4}>
                        <p style={{textAlign:'center', alignSelf:'center',paddingTop:'10% ', display:'grid', gridColumn:'1/9', gridRow:'1/2', fontSize:'1.1em'}}>Rekwizyty</p>
                             <p style={{textAlign:'center', padding: '4% 2% 0%', display:'grid', gridColumn:'1/9', gridRow:'2/7', fontSize:'0.5em'}}>
                             Dysponujemy również dwoma  koszykami wiklinowymi o wymiarach aa x bb cm
                        oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                        uroczystość. Oferujemy je Młodej Parze GRATIS!
                             </p>
                        </PhotoGridContainerOfferText>
                    </PhotoGridContainer>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img10} gridColumn={'13/47'} gridRow={'32/34'} width={100} height={100} margin={'8% 0 0 0%'} animation={fadeIn} delay={0.5} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img11} gridColumn={'28/54'} gridRow={'1/9'} width={80} height={84} margin={'-10% 0 0 -1%'}animation={fadeIn} delay={0.6} fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img12} gridColumn={'28/44'} 
                                        gridRow={'9/25'} width={85} height={99} margin={'-10% 0 0% 6%'}
                                        animation={fadeIn} delay={0.7} fillMode={'forwards'}>
                         <PhotoGridContainerOfferText className="dojazd" offerReveal={revealedFirst} animation={flipImageY} delay={1.7}>
                             <p style={{textAlign:'center', paddingTop:'10%', alignSelf:'center', display:'grid', gridColumn:'1/9', gridRow:'1/2', fontSize:'1.1em'}}>Dojazd</p>
                             <p style={{textAlign:'center', alignSelf: 'center', padding: '0 5%', display:'grid', gridColumn:'1/9', gridRow:'2/8', fontSize:'0.5em'}}>
                             W przypadku gdy impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                odpowiednią kwotę za dojazd. W sprawie dostępności zachęcamy do skorzystania 
                                z formularza  kontaktowego.
                             </p>
                         </PhotoGridContainerOfferText>
                    </PhotoGridContainer>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img13} gridColumn={'44/49'} gridRow={'9/25'} width={122} height={100} margin={'-30% 0 0 40%'}animation={fadeIn} delay={1.5}fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img14} gridColumn={'49/54'} gridRow={'9/25'} width={100} height={100} margin={'-29% 0 0 99%'}animation={fadeIn} delay={0.4}fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img15} gridColumn={'47/54'} gridRow={'25/30'} width={95} height={95} margin={'4% 0 0 40%'}animation={fadeIn} delay={0.3}fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img16} gridColumn={'47/49'} gridRow={'30/34'} width={100} height={90} margin={'73% 0 0 66%'}animation={flipImageY} delay={3.1}fillMode={'forwards'}/>
                    <PhotoGridContainer offerReveal={revealedFirst} img={img17} gridColumn={'49/54'} gridRow={'30/34'} width={118} height={100} margin={'41% 0 0 78%'}animation={fadeIn} delay={0.2}fillMode={'forwards'}/> 
                    
                    

                    
                </div>
                <div className ='intro_text' style={{
                    width:'80%',
                    height:'80%',
                    justifySelf:'center',
                    alignSelf:'center',
                    gridColumn:'1/3',
                    gridRow:'2/5',
                    gridTemplateColumns:'repeat(10,10%)',
                    gridTemplateRows:'repeat(10,10%)',
                    display:'grid',
                    // border:'2px solid black'
                }}>
                    <div style={{
                        display:'grid',
                        // border:'2px solid black',
                        gridColumn:'1/11',
                        gridRow:'3/10',
                        padding:'0 6%'
                        
                    }}>
                        <p style={{ 
                            // padding:'5%',                     
                            textAlign:'justify',
                            fontFamily:'Josefin Sans, sans-serif',
                            fontSize:'0.7em' 
                            }}>Szukacie wyjątkowego auta do ślubu? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                        gościach? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                        najważniejszego dnia w Waszym życiu?  Nasze czerwone MG, model MGB rocznik 1977 pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !
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
                            fontSize:'1.7em'
                        }}>MG MGB 1977'</p>
                    </div>
                </div>
            </div>

            
           
        );
    }
}

export default OfferNew;