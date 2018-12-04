import React from 'react';
import styled from 'styled-components';
import MediaQueries from 'react-responsive';
import Fade from 'react-reveal';

import img from '../src/resources/images/CabrioLsniace.jpg';
import FacebookIcon from '../src/resources/icons/facebook_blue.png';
import InstagramIcon from '../src/resources/icons/instagram.png';
import YouTubeIcon from '../src/resources/icons/youtube.png';


const HeaderSection = styled.div`
    /* background-image: url(${img}); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:100vh;
    width: 100%;
    border: 2px solid black;
    display:flex;
    align-items: center;
    justify-content: center;

`;

const HeaderWrapper = styled.div`
    width:90%;
    height: 80vh;
    border: 2px solid black;
    display:flex;
    
`;

const SCWrapper = styled.div`
    width: 10%;
    height: 8%;
    border: 2px solid black;
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
    border: 2px solid black;
`;

const MenuWrapper = styled.div`
    width: 80%;
    height: 50%;
    border: 2px solid black;
    margin-left: 10px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

`;

const Menu = styled.div`
    width: 80%;
    height: 50%;
    display:flex;
    flex-direction: row;
    justify-self: center;
    justify-content: space-around;
    border: 2px solid black;
    
`;

const CarAnimation = styled.div`
    font-family: 'Satisfy', cursive;
    font-size: 2em;
`;

const MenuText = styled.h2`
    width: 50%;
    height: 30%;
    border: 2px solid black;
    text-align: center;
    
`;

const Header = () => {
    return (
        <div>
            <HeaderSection>
                <HeaderWrapper>
                    <SCWrapper>
                         <SocialIcon image={FacebookIcon}></SocialIcon>
                         <SocialIcon image={InstagramIcon}></SocialIcon>
                         <SocialIcon image={YouTubeIcon}></SocialIcon>
                    </SCWrapper>
                    <MenuWrapper>
                        <Menu>
                            <div><a target="_blank" href="https://www.flashscore.pl/">Home</a></div>
                            <div>Offer</div>
                            <CarAnimation>Czerwony Kabriolet</CarAnimation>
                            <div>Galleryy</div>
                            <div>Contact</div>
                        </Menu>
                        <MenuText>
                            <h4>Piękno Styl Elegancja</h4>
                        </MenuText>
                    </MenuWrapper>
            </HeaderWrapper>
            </HeaderSection>
            
        </div>
            );
        };
        
export default Header;