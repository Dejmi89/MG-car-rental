import React, { Component } from 'react';
import Gallery from './Gallery';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';

const fadeIn = keyframes`
    from{opacity:0}
    to{opacity:1}
`;

const Cells = [
    {
        width: 7,
        height: 1,
        left: 2,
        top: 1,
        img: img2,
        animation: fadeIn
    },
    {
        width: 3,
        height: 3,
        left: 2,
        top: 2,
        img: img2,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 1,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 2,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 8,
        top: 2,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 2,
        top: 5,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 3,
        top: 5,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 4,
        top: 5,
        img: img2,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 4,
        img: img2,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 7,
        top: 3,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 5,
        img: img2,
        animation: fadeIn
    },

]

const ImageContainerWrapper = styled.div`
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

const CellFilling = styled.div`
        background-image: url(${props => props.img});
            `;

class Example extends Component {
    constructor(props){
        super(props);
          this.state = {
            opacity: '1'
          }  
        
    }
   

     showHeroes = () => 
        Cells.map((cell, i) => (
            
                <Cell width={cell.width} height={cell.height} left={cell.left} img={cell.img} animation={cell.animation}>
                    <ImageContainerWrapper>
                        <ImageContainer></ImageContainer>
                    </ImageContainerWrapper>
                    
                    </Cell>
            
        ))
    

    


    render() {

        
       
        return (
            <Grid
            name={this.props.name}
            style={{opacity:this.state.opacity}}
            columns={'repeat(9,minmax(max-content,auto))'}
            rows={'repeat(6, minmax(150px, auto))'}
            gap='5px'
            >
                {this.showHeroes()} 
            </Grid>
        );
    }
}

export default Example;