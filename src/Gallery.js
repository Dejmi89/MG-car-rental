import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import Fade from 'react-reveal';

import img1 from './resources/images/wnetrzeAuta.jpg';
import img2 from './resources/images/gearbox_stick.jpg';

class Gallery extends Component {
    render() {

        const GalleryGrid = () => (
            <Grid
                columns={'repeat(9,1fr)'}
                rows={'repeat(6, 1fr)'}
                gap='5px'
            >
                <Cell width={3} height={3} left={2} top={2}>
                    <First>

                        <ImageContainer image={img1}></ImageContainer>

                    </First>
                </Cell>
                <Cell width={2} height={2} left={5} top={2}>
                    <First>c</First>
                </Cell>
                <Cell width={1} height={1} left={7} top={2}>
                    <First>d</First>
                </Cell>
                <Cell width={1} height={1} left={8} top={2}>
                    <First>e</First>
                </Cell>
                <Cell width={1} height={1} left={2} top={5}>
                    <First>f</First>
                </Cell>
                <Cell width={1} height={1} left={3} top={5}>
                    <First>g</First>
                </Cell>
                <Cell width={1} height={1} left={4} top={5}>
                    <First>h</First>
                </Cell>
                <Cell width={2} height={2} left={5} top={4}>
                    <First>h</First>
                </Cell>
                <Cell width={2} height={2} left={7} top={3}>
                    <First>h</First>
                </Cell>
                <Cell width={1} height={1} left={7} top={5}>
                    <First>
                        <ImageContainer image={img2}></ImageContainer>
                    </First>

                </Cell>
                <Cell width={1} height={1} left={8} top={5}>
                    <First>d</First>
                </Cell>
            </Grid>
        )

        const First = styled.div`
        border: 2px solid black;
        width: 100%;
        height: 100%;
            
        `;

        const ImageContainer = styled.div`
            background-image: ${props => `url(${props.image})`};
            background-position:center;
            background-size:cover;
            width:100%;
            height:100%;
        `;

        return (
            <div>
                <GalleryGrid>

                </GalleryGrid>
            </div>
        );
    }
}

export default Gallery;