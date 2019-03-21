import React from 'react';
import styled, {keyframes} from 'styled-components';
import Fade from 'react-reveal';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import img from '../src/resources/images/carIntheWoods2.jpg.svg.png';


library.add(fab);

const fadeIn = keyframes`
    0%{
        opacity:0
    }
   
    100%{
        opacity:1
        }
`;

const HeaderSection = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y:65%;
    min-height:100vh;
    width: 100%;
    /* border: 2px solid black; */
    display:flex;
    align-items: center;
    

`;

const HeaderWrapper = styled.div`
    width:80%;
    height: 80vh;
    /* border: 2px solid white; */
    display:flex;
    justify-content:center;
    
`;

const SCWrapper = styled.div`
    width: 10%;
    height: 15vh;
    /* border: 2px solid white; */
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;    
    
`;


const MenuWrapper = styled.div`
    width: 80%;
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
    width: 80%;
    height: 30%;
    display:flex;
    flex-direction: row;
    justify-self: center;
    justify-content: space-around;
    align-items:center;
    /* border: 2px solid white; */
    color: white;
    font-size: 1.5em;
    /* position:fixed; */
    top: 1%;
        div {
            &:hover{
                opacity: ${props => `${props.opacity}`};
                cursor: pointer;
            }
        }
`;

const CarAnimation = styled.div`
    font-size: 7.3em;
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


const MenuText = styled.h2`
    width: 50%;
    height: 30%;
    /* border: 2px solid black; */
    text-align: center;
    display:flex;
    justify-content:center;
    color: #ffffff;  
`;

const Nouns = styled.h4`
    margin-right:5%;
    opacity:0;
    animation: ${fadeIn} 2s forwards;
    animation-delay: ${props => props.delay}s;
`;
const HeaderOnScrollWrapper = styled.div`

    display:grid;
    grid-template-columns:100%;
    justify-items:end;
    position:fixed;
    right:0%;
    width:11%;
    height:20vh;
    z-index:1;
    animation:${fadeIn} 1s forwards; 
    
`;
const HeaderOnScrollField = styled.div`
    display: grid;
    width:80%;
    height:90%;
    border:1px solid white;
    justify-content:center;
    align-items:center;
    background-color:white;
    font-family: 'Satisfy', cursive;
    font-size:1.3em;
    animation: ${fadeIn} 3s forwards;
    animation-delay: ${props=>props.delay}s;
    &:hover {
        background-color:black;
        color:white;
        border: 1px solid black;
    }
`;


class Header extends React.Component {
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
            <SCWrapper style={{alignSelf:'flex-start', marginTop:'-1%'}}>
                        <a href="https://www.facebook.com/czerwonykabrioletnaslub/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} 
                                        style={{
                                            fontSize: this.state.hovered ? '3em': '2em',
                                            color: this.state.hovered ? 'lightblue' : 'white',
                                            cursor:this.state.hovered ? 'pointer' : 'default'
                                            }}
                                             
                                            onMouseEnter={this.handleSocialIconStyle}
                                            onMouseLeave={this.handleSocialIconStyle}/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
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
                        <a href="https://www.youtube.com/" target="_blank">
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
                            <HeaderOnScrollWrapper>
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
                                    <div onClick={this.props.scrollFunc}>Oferta</div>
                                </Link>
                            
                                <Link 
                                to='gallery' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Galeria</div>
                                </Link>
                           
                                <Link 
                                to='contact' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Kontakt</div>
                                </Link>
                                                   
                         </Menu>

                         <CarAnimation >Czerwony Kabriolet</CarAnimation>

                        <MenuText>
                            <Nouns delay={0.5}>Piękno</Nouns>
                            <Nouns delay={0.8}>Styl</Nouns>
                            <Nouns delay={1.1}>Elegancja</Nouns>
                        </MenuText>
                    </MenuWrapper>
                    
            </HeaderWrapper>
            </HeaderSection>
            
        
            </div>
        );
    }
}

export default Header;