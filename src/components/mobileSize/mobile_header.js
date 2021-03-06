import React from 'react';
import styled, {keyframes} from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link,
  scroller
} from "react-scroll";

import img from '../../resources/images/carIntheWoods.png';
import mainIMG from '../../../src/resources/images/sesja/DSC_0257.JPG';
import Handwriting from '../../components/mobileSize/mobile_Handwriting';


library.add(fab);

const fadeIn = keyframes`
    from{
        opacity:0
    }
    to{
        opacity:1
        }
`;

const bounceFromRight = keyframes`
    0%{
        width:90%
    }
    
    100%{
        width:50%
        }
`;

const HeaderSection = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x:50%;
    min-height:100vh;
    width: 100%;
    /* border: 2px solid black; */
    /* display:flex; */
    /* align-items: center; */
`;
const HeaderSectionBackground = styled.div`
    background-image: url(${mainIMG});
    transform: rotate(90deg);
`;
const HeaderWrapper = styled.div`
    width:100%;
    height: 80vh;
    /* border: 2px solid white; */
    display:flex;
    justify-content:center;
`;

const SCWrapper = styled.div`
    width: 20%;
    height: 5vh;
    /* border: 2px solid white; */
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;    
    font-size:0.4em;
    animation: ${fadeIn} 3s linear forwards;
    animation-delay: ${props => props.delay}s;
    opacity:0;
`;


const MenuWrapper = styled.div`
    width: 100%;
    height: 50%;
    /* border: 2px solid white; */
    margin-left: 10px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`;

const Menu = styled.div`
    width: 100%;
    height: 30%;
    display:flex;
    flex-direction: row;
    justify-self: center;
    justify-content: space-around;
    /* border: 2px solid white; */
    color: white;
    font-size: 1em;
    font-family: 'Dancing Script', cursive;
    align-items:flex-end;
    top: 1%;
        div {
            &:hover{
                opacity: ${props => `${props.opacity}`};
                cursor: pointer;
            }
        }
`;

const CarAnimation = styled.div`
    font-size: 2.3em;
    color:white;
    /* border: 2px solid white; */
    text-align:center;
    width:80%;
    height:15vh;
    display:flex;
    align-items:center;
    justify-self:center;
    justify-content:center;
    `;

const MenuText = styled.div`
    width: 50%;
    height: 20%;
    /* border: 2px solid white; */
    text-align: center;
    color: #ffffff;
    font-size:0.8em;
    display:flex;
    justify-content:center;
    font-family: 'Dancing Script', cursive;
`;
const Nouns = styled.div`
    margin-right:5%;
    opacity:0;
    animation: ${fadeIn} 2s forwards;
    animation-delay: ${props => props.delay}s;
    font-size: 1.3em;
`;
const HeaderOnScrollWrapper = styled.div`
    display:grid;
    grid-template-columns:100%;
    justify-items:end;
    position:fixed;
    right:0;
    width:30%;
    height:20vh;
    z-index:1;
    animation:${fadeIn} 2s forwards; 
    font-size: 0.8em;
    /* border:2px solid white; */
`;
const HeaderOnScrollField = styled.div`
    display: grid;
    width:10%;
    height:90%;
    /* border:1px solid black; */
    margin-top:1%;
    justify-content:center;
    align-items:center;
    background-color:white;
    font-family: 'Satisfy', cursive;
    animation: ${bounceFromRight} 1s forwards;
    animation-delay: ${props=>props.delay}s;
    &:hover {
        background-color:black;
        color:white;
        /* border: 1px solid black; */  
    }
`;

const LinkMenu = styled.div`
    animation: ${fadeIn} 2s linear forwards;
    animation-delay: ${props => props.delay}s;
    opacity:0;
`;

class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,
            hovered: false,
            hovered2: false,
            hovered3: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
     handleScroll = () =>  {
        if (window.scrollY <= 200 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        } else if (window.scrollY >= 200 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }
    
    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuint"
        });
      }
    handleSocialIconStyle = () => {
        this.setState({
            hovered: !this.state.hovered,
        })
    }
    handleSocialIconStyle2 = () => {
        this.setState({
            hovered2: !this.state.hovered2
        })
    }
    handleSocialIconStyle3 = () => {
        this.setState({
            hovered3: !this.state.hovered3
        })
    }
    reload = () => {
        window.location.reload();
        window.scrollTo(0,0);
    }

    render() {
        
        return (
            
        <div>
            <HeaderSection>
                
            <SCWrapper delay={6} style={{alignSelf:'center', marginLeft:'1%'}}>
                        <a href="https://www.facebook.com/czerwonykabrioletnaslub/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} 
                                        style={{
                                            fontSize: this.state.hovered ? '3em': '2em',
                                            color: this.state.hovered ? 'lightblue' : 'white',
                                            cursor:this.state.hovered ? 'pointer' : 'default'
                                            }}
                                             
                                            onMouseEnter={this.handleSocialIconStyle}
                                            onMouseLeave={this.handleSocialIconStyle}/>
                        </a>
                        <a href="https://www.instagram.com/kabrioletczerwony/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} 
                                        style={{
                                            fontSize: this.state.hovered2 ? '3em': '2em', 
                                            marginLeft:'15px',
                                            color:this.state.hovered2 ? 'violet' : 'white',
                                            cursor:this.state.hovered2 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle2}
                                            onMouseLeave={this.handleSocialIconStyle2}/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'youtube']} 
                                        style={{
                                            fontSize: this.state.hovered3 ? '3em': '2em',
                                            marginLeft:'15px',
                                            color: this.state.hovered3? 'red' : 'white',
                                            cursor:this.state.hovered3 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle3}
                                            onMouseLeave={this.handleSocialIconStyle3}/>
                        </a>
                        
                    </SCWrapper>

                <HeaderWrapper>
                    
                        <MenuWrapper>
                            {this.state.scrolling === true ? 
                            <HeaderOnScrollWrapper >
                                <HeaderOnScrollField  delay={0.2} onClick={this.props.toTop}>Do góry</HeaderOnScrollField>
                                <HeaderOnScrollField  delay={0.3}><Link to='offer' smooth={true} duration={1000}>Oferta</Link></HeaderOnScrollField>
                                <HeaderOnScrollField  delay={0.4}><Link to='gallery' smooth={true} duration={1000}>Galeria</Link></HeaderOnScrollField>
                                <HeaderOnScrollField  delay={0.5}><Link to='contact' smooth={true} duration={1000}>Kontakt</Link></HeaderOnScrollField>
                            </HeaderOnScrollWrapper>
                        : ''}

                        <Menu opacity={0.3}>
                            
                                                          
                                <Link 
                                to='offer' 
                                smooth={true} 
                                duration={1000}>
                                    <LinkMenu delay={2.8} onClick={this.props.scrollFunc}>Oferta</LinkMenu>
                                </Link>
                            
                                <Link 
                                to='gallery' 
                                smooth={true} 
                                duration={1000}>
                                    <LinkMenu delay={3.1} onClick={this.props.scrollFunc}>Galeria</LinkMenu>
                                </Link>
                           
                                <Link 
                                to='contact' 
                                smooth={true} 
                                duration={1000}>
                                    <LinkMenu delay={3.4} onClick={this.props.scrollFunc}>Kontakt</LinkMenu>
                                </Link>
                                                  
                         </Menu>
                         <CarAnimation ><Handwriting/></CarAnimation>       
                        <MenuText>
                            <Nouns delay={3.7}>Piękno</Nouns>
                            <Nouns delay={4.0}>Styl</Nouns>
                            <Nouns delay={4.3}>Elegancja</Nouns>
                        </MenuText>
                    </MenuWrapper>
                    
            </HeaderWrapper>
            </HeaderSection>
            
        
            </div>
        );
    }
}

export default MobileHeader;