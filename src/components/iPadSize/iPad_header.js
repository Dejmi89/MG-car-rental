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
import img from '../../resources/images/carIntheWoods.jpg';


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
    background-position-y:65%;
    min-height:100vh;
    width: 100%;
    /* border: 2px solid black; */
    /* display:flex;
    align-items: center; */
    

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
    font-size: 0.7em;

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
    font-size: 0.8em;

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
    font-size: 2em;
`;

const MenuText = styled.h2`
    width: 50%;
    height: 20%;
    /* border: 2px solid white; */
    text-align: center;
    color: #ffffff;
    font-size: 1.3em;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    margin-top:0;
               
`;
const HeaderOnScrollWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content:right;
    margin-right:0.3%;
    flex-wrap:wrap;
    position:fixed;
    right:0;
    width:18%;
    height:20vh;
    z-index:1;
    animation:${fadeIn} 2s forwards; 
`;
const HeaderOnScrollField = styled.div`
    display: flex;
    width:90%;
    height:20%;
    border:1px solid white;
    justify-content:center;
    align-items:center;
    background-color:white;
    font-family: 'Satisfy', cursive;
    font-size:1.3em;
    animation: ${bounceFromRight} 1s forwards;
    animation-delay: ${props=>props.delay}s;
    
    &:hover {
        background-color:black;
        color:white;
        border: 1px solid black;
        
    }
`;

class IpadHeader extends React.Component {
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

    render() {
        
        return (
            
        <div>
            <HeaderSection>
            <SCWrapper style={{alignSelf:'flex-start', marginTop:'-1%'}}>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} 
                                        style={{
                                            fontSize: this.state.hovered ? '3em': '2em',
                                            color: this.state.hovered ? 'lightblue' : 'white',
                                            cursor:this.state.hovered ? 'pointer' : 'default'
                                            }}
                                             
                                            onMouseEnter={this.handleSocialIconStyle}
                                            onMouseLeave={this.handleSocialIconStyle}/>
                        <FontAwesomeIcon icon={['fab', 'instagram']} 
                                        style={{
                                            fontSize: this.state.hovered2 ? '3em': '2em', 
                                            marginLeft:'15px',
                                            color:this.state.hovered2 ? 'violet' : 'white',
                                            cursor:this.state.hovered2 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle2}
                                            onMouseLeave={this.handleSocialIconStyle2}/>
                        <FontAwesomeIcon icon={['fab', 'youtube']} 
                                        style={{
                                            fontSize: this.state.hovered3 ? '3em': '2em',
                                            marginLeft:'15px',
                                            color: this.state.hovered3? 'red' : 'white',
                                            cursor:this.state.hovered3 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle3}
                                            onMouseLeave={this.handleSocialIconStyle3}/>
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
                                to='galeria' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Home</div>
                                </Link>
                            
                                <Link 
                                to='offer' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Offer</div>
                                </Link>
                            
                            <CarAnimation >Czerwony Kabriolet</CarAnimation>
                            
                                <Link 
                                to='gallery' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Gallery</div>
                                </Link>
                           
                                <Link 
                                to='contact' 
                                smooth={true} 
                                duration={1000}>
                                    <div onClick={this.props.scrollFunc}>Contact</div>
                                </Link>
                                                   
                         </Menu>
                        
                        <MenuText>
                            <Fade><h4>Piękno Styl Elegancja</h4></Fade>
                        </MenuText>
                    </MenuWrapper>
                    
            </HeaderWrapper>
            </HeaderSection>
            
        
            </div>
        );
    }
}

export default IpadHeader;