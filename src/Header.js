import React from 'react';
import styled, {keyframes} from 'styled-components';
import Fade from 'react-reveal';
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import img from '../src/resources/images/carIntheWoods.jpg';
import FacebookIcon from '../src/resources/icons/facebook_blue.png';
import InstagramIcon from '../src/resources/icons/instagram.png';
import YouTubeIcon from '../src/resources/icons/youtube.png';




const HeaderSection = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
    background-position-y:65%;
    min-height:100vh;
    width: 100%;
    /* border: 2px solid black; */
    display:flex;
    align-items: center;
    justify-content: center;

`;

const HeaderWrapper = styled.div`
    width:90%;
    height: 80vh;
    /* border: 2px solid black; */
    display:flex;
    
`;

const SCWrapper = styled.div`
    width: 10%;
    height: 8%;
    /* border: 2px solid black; */
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin-left: 5px;
    margin-top: 5px;
`;

const SocialIcon = styled.div`
    background-image: ${props => `url(${props.image})`};
    background-size:cover;
    background-repeat: no-repeat;
    width: 30%;
    height: 80%;
    /* font-size:1em; */
    text-align:center;
        h3{
            visibility:hidden;
        }
`;

const MenuWrapper = styled.div`
    width: 80%;
    height: 50%;
    /* border: 2px solid black; */
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
    /* border: 2px solid black; */
    color: white;
    font-size: 1.5em;
    /* position:fixed; */
    top: 1%;
        div {
            &:hover{
                opacity: ${props => `${props.opacity}`};
            }
        }
`;

const CarAnimation = styled.div`
    /* font-family: 'Satisfy', cursive; */
    font-size: 2em;
`;

const MenuText = styled.h2`
    width: 50%;
    height: 30%;
    /* border: 2px solid black; */
    text-align: center;
    /* font-family: 'Satisfy', cursive; */
    color: #ffffff;
            
`;

const fadeIn = keyframes`
    from{opacity:0}
    to{opacity:1}
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
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

    render() {
        
        return (
            
        <div>
            <HeaderSection>
                <HeaderWrapper>
                    
                    <SCWrapper>
                         <SocialIcon image={FacebookIcon} ><a href='www.facebook.com' target='_blank'><h3>l</h3></a></SocialIcon>
                         <SocialIcon image={InstagramIcon}><a href='www.instagram.com' target='_blank'><h3>l</h3></a></SocialIcon>
                         <SocialIcon image={YouTubeIcon}><a href='www.youtube.com' target='_blank'><h3>l</h3></a></SocialIcon>
                    </SCWrapper>
                    
                        <MenuWrapper>
                        
                        <Menu opacity={0.3} style={{position: this.state.scrolling ? 'fixed' : '',
                                zIndex: 1,
                                backgroundColor: this.state.scrolling ? 'red' : 'transparent',
                                height: this.state.scrolling ? '6%' : '30%'
                                }}>
                            <Fade><Link to='galeria' smooth={true} duration={1000}><div onClick={this.props.scrollFunc}>Home </div></Link></Fade>
                            <Fade><div>Offer</div></Fade>
                            <CarAnimation>Czerwony Kabriolet</CarAnimation>
                            <Fade><div>Gallery</div></Fade>
                            <Fade><div>Contact</div></Fade>                       
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

export default Header;