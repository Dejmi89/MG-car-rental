import React from 'react';
import styled from 'styled-components';

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
    width:95%;
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
    align-items: center;
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
                    <OfferContainer>
                        <OfferArticleWrapper>

                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <OfferArticleHeading>s</OfferArticleHeading>
                            <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <OfferArticleHeading>d</OfferArticleHeading>
                            <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                        </OfferArticleWrapper>
                    </OfferContainer>
                    <OfferContainer>
                        <OfferArticleWrapper>
                            <OfferArticleHeading>f</OfferArticleHeading>
                            <OfferArticle>Tempor anim officia proident irure. Id id est proident cupidatat minim qui est. Cupidatat non enim eiusmod aute velit voluptate est. Officia enim incididunt ad laborum non officia exercitation. Officia culpa eu cupidatat tempor amet minim magna laboris amet do duis exercitation. Adipisicing sit quis occaecat adipisicing nulla dolor minim minim ad ullamco qui.</OfferArticle>
                        </OfferArticleWrapper>
                    </OfferContainer>
                </OfferWrapper>
            </OfferSection>
        </div>
    );
};

export default Offer;