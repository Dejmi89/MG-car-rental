import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img6 from './resources/images/steering_wheel.jpg';

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
    grid-row:1/5;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #890025;
    transform: translate(0, 50%);
    opacity:0;
    height:80%;
    margin-top:10%;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
`;
const OfferTwo = styled.div`

    display:grid;
    grid-column:1/6;
    grid-row:1/5;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #E64F64;
    transform: translate(0, -50%);
    opacity:0;
    height:80%;
    margin-top:10%;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
`;
const OfferThree = styled.div`

    display:grid;
    grid-column:1/7;
    grid-row:1/5;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows:16.5% 16.5% 16.5% 16.5% 16.5% 16.5%;
    background-color: #c19ac7;
    transform: translate(0, 50%);
    opacity:0;
    height:80%;
    margin-top:10%;
    animation: ${props => props.positionY ? SlideIn :'none'} 2s ease-in-out forwards;
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
            <div className='offer' style={{
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
                        fontSize:'0.9em',
                        fontFamily:'Josefin Sans, sans-serif'
                    }}>
                        <FadeIn>
                        <p>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                        gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                        najważniejszego dnia w Waszym życiu ?  Nasze czerwone MG, model MGB rocznik 1977 pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !
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
                   gridTemplateRows:'25% 25% 25% 25% ',
                   color:'white'
               }}>
                    <OfferOne positionY={revealedFirst}>
                        <div className='title_1' style={{
                            // margin:'5px 5px 5px 5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'3.0em',
                            justifyContent:'center',
                            alignContent:'center',
                            fontFamily:'Josefin Sans, sans-serif',
                            backgroundColor:'white',
                            color:'#890025'
                            }}>
                                <p>Okazje</p>
                        </div>
                        <div className="offer1_text" style={{
                            // margin:'5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            gridTemplateColumns:'25% 25% 25% 25%',
                            gridTemplateRows:'25% 25% 25% 25%',
                            justifyContent:'center',
                            textAlign:'justify',
                            fontSize:'1.40em',
                            fontFamily:'Josefin Sans, sans-serif',
                            padding:'0 9% 0 9%'
                        }}>
                                <div  style={{
                                // border:'2px solid black',
                                display:'grid',
                                gridColumn:'1/5',
                                gridRow:'1/2',
                                padding:'0 2% 0 2%'
                                }}>
                                    <p style={{lineHeight:'1.2em'}}>Z przyjemnością umilamy wszelkie uroczystości, które wymagają oryginalności, prestiżu i klasy,
                                    takie jak :</p>
                                </div>
                            
                                <div  style={{
                                    // border:'2px solid black',
                                    display:'grid',
                                    gridColumn:'1/5',
                                    gridRow:'2/5',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    textAlign:'justify',
                                    listStyle:'none',
                                    padding: '3% 0 3% 0'
                                    
                                    
                                }}>
                                    <li>- Śluby</li>
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
                //    border:'20px solid white',
                   display:'grid',
                   gridColumn:'4/6',
                   gridRow:'3/7',
                   gridTemplateColumns:'20% 20% 20% 20% 20% ',
                   gridTemplateRows:'25% 25% 25% 25%',
                   color:'white'

               }}>
                    <OfferTwo positionY={revealedFirst}>
                        <div className='title_2' style={{
                            // margin:'5px 5px 5px 5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'3.0em',
                            justifyContent:'center',
                            alignContent:'center',
                            fontFamily:'Josefin Sans, sans-serif',
                            backgroundColor:'white',
                            color:'#E64F64'

                            }}>
                                <p>Dojazd</p>
                        </div>
                        <div className="offer2_text" style={{
                            // margin:'5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            alignContent:'center',
                            textAlign:'justify',
                            fontSize:'1.5em',
                            fontFamily:'Josefin Sans, sans-serif',
                            padding:'0 13% 0 13%'
                        }}>
                            <p style={{lineHeight:'1.3em'}}>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
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
                            // margin:'5px 5px 5px 5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'1/2',
                            fontSize:'3.0em',
                            fontFamily:'Josefin Sans, sans-serif',
                            justifyContent:'center',
                            alignContent:'center',
                            backgroundColor:'white',
                            color:'#c19ac7'
                            }}>
                            <p>Rekwizyty</p>
                        </div>
                        <div className="offer3_text" style={{
                            margin:'5px',
                            // border:'2px solid white',
                            display:'grid',
                            gridColumn:'1/5',
                            gridRow:'2/7',
                            justifyContent:'center',
                            alignContent:'center',
                            textAlign:'justify',
                            fontSize:'1.5em',
                            fontFamily:'Josefin Sans, sans-serif',
                            padding:'0 11% 0 11%'
                        }}><p style={{lineHeight:'1.3em'}}>Dysponujemy również dwoma  koszykami wiklinowymi o wymiarach aa x bb cm
                        oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                        uroczystość. Oferujemy je Młodej Parze GRATIS!</p>
                        </div>
                    </OfferThree>>
               </div>
            </div>
        );
    }
}

export default OfferNew;