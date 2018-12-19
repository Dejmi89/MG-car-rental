import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import Fade, {Zoom} from 'react-reveal';

import img1 from './resources/images/wnetrzeAuta.jpg';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';
import img4 from './resources/images/maskaPrzod.jpg';
import img5 from './resources/images/gearbox_stick.jpg';


class Gallery extends Component {
    render() {

        const GalleryGrid = () => (
            <Grid
                columns={'repeat(9,minmax(max-content,auto))'}
                rows={'repeat(6, minmax(150px, auto))'}
                gap='5px'
            >   
                <Cell width={7} height={1} left={2} top={1}>
                    <First style={{textAlign:"center", border:'0px'}}>
                        <h1>Galeria</h1>
                    </First>
                </Cell>
                <Cell width={3} height={3} left={2} top={2}>
                    <First>
                        <ImageContainer image={img2}></ImageContainer>
                    </First>
                </Cell>
                
                <Cell width={2} height={2} left={5} top={2}>
                    <First>
                        <ImageContainer image={img3}></ImageContainer>
                    </First>
                </Cell>
                
                <Cell width={1} height={1} left={7} top={2}>
                    <First>
                        <ImageContainer image={img4}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={8} top={2}>
                        <First>
                            <ImageContainer image={img3}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={2} top={5}>
                        <First>
                            <ImageContainer image={img1}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={3} top={5}>
                        <First><ImageContainer image={img4}></ImageContainer></First>
                </Cell>
                    
                <Cell width={1} height={1} left={4} top={5}>
                        <First><ImageContainer image={img3}></ImageContainer></First>
                </Cell>
                    
                <Cell width={2} height={2} left={5} top={4}>
                        <First><ImageContainer image={img5}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={2} height={2} left={7} top={3}>
                        <First><ImageContainer image={img3}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={7} top={5}>
                        <First>
                            <ImageContainer image={img1}></ImageContainer>
                        </First>
                </Cell>
                
                <Cell width={1} height={1} left={8} top={5}>
                        
                        <First>
                            <ImageContainer image={img3}></ImageContainer>
                        </First>
                        
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
            &:hover {
                opacity:0.7;
                animation: ${props => `${props.animation}`};
            }
        `;

        return (
            <div>
                <Fade>
                    <GalleryGrid/>
                </Fade>
                

                
            </div>
        );
    }
}

export default Gallery;