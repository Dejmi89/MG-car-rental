import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/jaguar.jpg';
import img2 from './resources/images/rollsroyce.jpg';

const SlideIn = keyframes`
    40%{
        opacity:0;
    }
    100% {
        transform:translate(0,0);
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

const OfferOne = styled.div`

    display:grid;
    grid-column:1/7;
    grid-row:1/4;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #890025;
    transform: translate(0, 50%);
    opacity:0;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
`;
const OfferTwo = styled.div`

    display:grid;
    grid-column:1/6;
    grid-row:1/4;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #E64F64;
    transform: translate(0, -50%);
    opacity:0;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
`;
const OfferThree = styled.div`

    display:grid;
    grid-column:1/7;
    grid-row:1/4;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #c19ac7;
    transform: translate(0, 50%);
    opacity:0;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
`;

class Offer_new extends Component {
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
                // border: '2px solid black',
                width: '100%',
                height: '100vh',
                display: 'grid',
                gridTemplateColumns: '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%',
                gridTemplateRows: '16.5% 16.5% 16.5% 16.5% 16.5% 17.5%',
                }}>
                
               <div style={{
                //    border:'2px solid black',
                   display:'grid',
                   gridColumn:'3/7',
                   gridRow:'1/2',
                   textAlign:'center',
                   alignContent:'center',
                   fontSize:'3em'
               }}>
                    <FadeIn>
                    Oferta
                    </FadeIn>
               </div>
               
               <div style={{
                //    border:'2px solid black',
                   display:'grid',
                   gridColumn:'1/9',
                   gridRow:'2/3',
                   textAlign:'center',
                   alignContent:'center',
                   fontSize:'2em',
                   gridTemplateColumns: '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%',
                    gridTemplateRows: '20% 20% 20% 20% 20%',
               }}>
                    <div style={{
                        display:'grid',
                        gridColumn:'2/8',
                        gridRow:'1/5',
                        fontSize:'0.8em'
                    }}>
                        <FadeIn>
                        <p>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                        gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                        najważniejszego dnia w Waszym życiu ?  Nasze czerwone MG pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !
                        </p>
                        </FadeIn>
                    </div>
                    
               </div>

               {/* OFFER 1 */}
               <div className="offer1" style={{
                //    border:'2px solid black',
                   display:'grid',
                   gridColumn:'2/4',
                   gridRow:'3/7',
                   gridTemplateColumns:'16.5% 16.5% 16.5% 16.5% 16.5% 17.5%',
                   gridTemplateRows:'25% 25% 25% 25%',
                   color:'white'
               }}>
                    <OfferOne positionY={revealedFirst}>
                        <div className='title_1' style={{
                            // border:'2px solid red',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'1.7em',
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                                <p>MG model MGB, rocznik 1977</p>
                        </div>
                        <div className="offer1_text" style={{
                            // border:'2px solid black',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            gridTemplateColumns:'25% 25% 25% 25%',
                            gridTemplateRows:'25% 25% 25% 25%',
                            justifyContent:'center',
                            textAlign:'center',
                            fontSize:'1.7em',
                            // padding:'0 5px 0 3px'
                        }}>
                                <div  style={{
                                // border:'2px solid black',
                                display:'grid',
                                gridColumn:'1/5',
                                gridRow:'1/2'
                                }}>
                                    <p>Z przyjemnością umilamy wszelkie uroczystości wymagające oryginalności, prestiżu i klasy,
                                    takie jak :</p>
                                </div>
                            
                                <div  style={{
                                    // border:'2px solid black',
                                    display:'grid',
                                    gridColumn:'1/5',
                                    gridRow:'2/5',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    listStyle:'none',

                                    
                                }}>
                                    <li>- Sluby</li>
                                    <li>- Sesje fotograficzne</li>
                                    <li>- Reklamy</li>
                                    <li>- Filmy</li>
                                    <li>- Imprezy okolicznościowe</li>
                                    <li>- Niespodzianki</li>
                                   
                                </div>
                        </div>
                    </OfferOne>
               </div>

               {/* OFFER 2 */}
               <div className="offer2" style={{
                   border:'20px solid white',
                   display:'grid',
                   gridColumn:'4/6',
                   gridRow:'3/7',
                   gridTemplateColumns:'20% 20% 20% 20% 20% ',
                   gridTemplateRows:'25% 25% 25% 25%',
                   color:'white'

               }}>
                    <OfferTwo positionY={revealedFirst}>
                        <div className='title_2' style={{
                            // border:'2px solid red',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'1.7em',
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                                <p>Dojazd</p>
                        </div>
                        <div className="offer2_text" style={{
                            // border:'2px solid black',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            justifyContent:'center',
                            alignContent:'center',
                            textAlign:'center',
                            fontSize:'2em',
                            padding:'0 20px 0 20px'
                        }}>
                            <p>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                odpowiednią kwotę za dojazd. W sprawie dostępności zachęcamy do skorzystania 
                                z formularza kontaktowego.</p>
                        </div>
                    </OfferTwo>
               </div>

               {/* OFFER 3 */}
               <div className="offer3"style={{
                //    border:'2px solid white',
                   display:'grid',
                   gridColumn:'6/8',
                   gridRow:'3/7',
                   gridTemplateColumns:'16.5% 16.5% 16.5% 16.5% 16.5% 17%',
                   gridTemplateRows:'25% 25% 25% 25%',
                   color:'white'
                   

               }}>
                    <OfferThree positionY={revealedFirst}>
                        <div className='title_3' style={{
                            // border:'2px solid red',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'1.7em',
                            justifyContent:'center',
                            alignItems:'center'
                            }}>
                            <p>Rekwizyty</p>
                        </div>
                        <div className="offer3_text" style={{
                            // border:'2px solid black',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            justifyContent:'center',
                            alignContent:'center',
                            textAlign:'center',
                            fontSize:'2em',
                            padding:'0 20px 0 20px'
                        }}><p>Dysponujemy również dwoma  koszykami wiklinowymi o wymiarach aa x bb cm
                        oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                        uroczystość. Oferujemy je Młodej Parze GRATIS!</p>
                        </div>
                    </OfferThree>>
               </div>
            </div>
        );
    }
}

export default Offer_new;