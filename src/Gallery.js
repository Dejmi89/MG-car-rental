import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Fade from 'react-reveal';

class Gallery extends Component {
    render() {

        const GalleryWrapper = styled.div`
            width:100%;
            height: 50vh;
            border: 2px solid black;
            background-color:green;
        `

        return (
            <div>
                <GalleryWrapper>

                </GalleryWrapper>
            </div>
        );
    }
}

export default Gallery;