import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

import ImageGearbox from '../src/resources/images/gearbox_stick.jpg';
import ImageKolo from '../src/resources/images/steering_wheel.jpg';
import ImageWnetrze from '../src/resources/images/wnetrzeAuta.jpg';




const OfferSection = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 5px;
    border: 2px solid black;
`;

const OfferWrapper = styled.div`
    width:100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid black;
`;

const OfferContainer = styled.div`
    flex-basis: calc(50% - 14px);
    border: 2px solid black;
    justify-content: center;
    display: flex;
    min-height:50vh;
    align-items: center;
    background-image: ${props => `url(${props.image})`};
    background-size:cover;
    background-position:center;
`;

const OfferArticleWrapper = styled.div`
    width: 80%;
    height:90%;
    border: 2px solid black;
`;

const OfferArticleHeading = styled.h2`
    text-align:center;
    border: 2px solid black;
`;

const OfferArticle = styled.div`
    width: 90%;
    height:70%;
    border: 2px solid black;
    text-align:center;
`;

const Offer = () => {
    return (
        <div>
            <OfferSection>
                <OfferWrapper>
                        
                        <OfferContainer image={ImageGearbox}>
                            <OfferArticleWrapper>

                            </OfferArticleWrapper>
                        </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <Fade bottom>
                                <OfferArticleHeading>s</OfferArticleHeading>
                                <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                            </Fade>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <Fade>
                                <OfferArticleHeading>d</OfferArticleHeading>
                                <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                            </Fade>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer image={ImageKolo}>
                        <OfferArticleWrapper>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer image={ImageWnetrze}>
                        <OfferArticleWrapper>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <Fade>
                                <OfferArticleHeading>f</OfferArticleHeading>
                                <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                            </Fade>
                            
                        </OfferArticleWrapper>
                    </OfferContainer>
                </OfferWrapper>
            </OfferSection>
        </div>
    );
};

export default Offer;