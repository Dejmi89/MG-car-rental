import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/jaguar.jpg';
import img2 from './resources/images/rollsroyce.jpg';

class Offer_new extends Component {
    render() {
        return (
            <div style={{
                // border: '2px solid black',
                width: '100%',
                height: '150vh',
                display: 'grid',
                gridTemplateColumns: '16.5% 16.5% 16.5% 16.5% 16.5% 16.5%',
                gridTemplateRows: '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%',
                backgroundColor: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
            }}>
                <div className='wstep' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '2/6',
                    gridRow: '1/10',
                    backgroundColor: '#FFFFFF'
                }}>
                </div>
                <div className='tytul' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '1/2',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: '3.5em',
                }}>Oferta</div>
                <div className='introduction' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '2/6',
                    gridRow: '2/3',
                    fontSize: '1.7em',
                    textAlign: 'center',
                    alignContent: 'center',
                    paddingBottom:'5%'
                }}>
                    <p>Szukacie wyjątkowego auta do ślubu ? Lubicie być oryginalni i chcecie zrobić piorunujące wrażenie na
                        gościach ? A może po prostu chcielibyście przenieść się w czasie i zapewnić niepowtarzalny klimat tego
                    najważniejszego dnia w Waszym życiu ? <br /> Nasze czerwone MG pomoże Wam spełnić te marzenia i zapewni niepowtarzalne wspomnienia !</p>
                </div>
                <div className='firstParagraph' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '3/4',
                    fontSize: '2em',
                    textAlign: 'center',
                    alignContent: 'center',
                    paddingLeft:'18%'
                }}>
                    <p>Z przyjemnością umilamy wszelkie <br/> uroczystości wymagające <br/>oryginalności, prestiżu i klasy,
                                    takie jak :</p>
                </div>
                <div className='secondParagraph' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '4/5',
                    fontSize: '1.3em',
                    justifyContent:'center',
                    alignContent: 'center',
                    paddingLeft:'20%'
                }}>
                    <li>
                    Śluby
                    </li>
                    <li>
                    Sesje fotograficzne
                    </li>
                    <li>
                    Reklamy
                    </li>
                    <li>
                    Filmy
                    </li>
                    <li>
                    Imprezy okolicznościowe
                    </li>
                    <li>
                    Niespodzianki
                    </li>
                </div>
                <div className='thirdParagraph' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '5/7',
                    fontSize: '2em',
                    // justifyContent:'center',
                    textAlign: 'center',
                    alignContent: 'center',
                    paddingLeft:'8%'
                }}>
                    <p>DOJAZD <br/>W przypadku gdu impreza odbywa sie w dalszej odległości od Poznania doliczamy
                                    odpowiednią kwotę za dojazd. <br/>W sprawie dostępności zachęcamy do skorzystania 
                                    z formularza kontaktowego.
                                </p>
                </div>
                <div className='lastParagraph' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '7/9',
                    fontSize: '2em',
                    // justifyContent:'center',
                    textAlign: 'center',
                    alignContent: 'center',
                    paddingRight:'27%'
                }}>
                    <p>REKWIZYTY<br/>Dysponujemy również dwoma <br/> koszykami wiklinowymi o wymiarach aa x bb cm
                                    oraz okazjonalną tablicą rejestracyjną, które mogą uatrakcyjnić Waszą
                                    uroczystość. Oferujemy je Młodej Parze GRATIS!
                                </p>
                </div>
                <div className='offerText' style={{
                    // border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '2/10',
                   
                }}></div>
                <div className='foto1' style={{
                    border: '7px solid white',
                    display: 'grid',
                    gridColumn: '4/2',
                    gridRow: '3/8',
                    transform: 'rotate(96deg) translate(-130px, 435px)',
                    backgroundImage: `url(${img})`,
                    // boxShadow: '20px 10px 10px 20px #FCECF1'
                }}></div>
                <div className='foto2' style={{
                    border: '7px solid white',
                    display: 'grid',
                    gridColumn: '5/7',
                    gridRow: '4/7',
                    transform: 'rotate(135deg) translate(316px, -190px)',
                    backgroundImage: `url(${img2})`

                }}></div>
            </div>
        );
    }
}

export default Offer_new;