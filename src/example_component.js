import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Fade, {Zoom} from 'react-reveal';
import {Grid, Cell} from 'styled-css-grid';
import img1 from './resources/images/wnetrzeAuta.jpg';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';
import img4 from './resources/images/maskaPrzod.jpg';
import img5 from './resources/images/mg_hood.jpg';
import img6 from './resources/images/steering_wheel.jpg';
import img7 from './resources/images/pexels-photo.jpg';
import img8 from './resources/images/mercedes_garage.jpg';
import img9 from './resources/images/mercedes_front.jpg';
import img10 from './resources/images/jaguar-oldtimer-red-auto-163224.jpeg';
import img11 from './resources/images/gearbox_stick.jpg';

const fadeIn = keyframes`
    from{
        opacity:1
        }
    to{
        opacity:0
        }
`;



const Cells = [
    
    {
        width: 3,
        height: 3,
        left:2,
        top: 1,
        img: img2,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 2,
        top: 4,
        img: img3,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 3,
        top: 4,
        img: img4,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 4,
        top: 4,
        img: img5,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 1,
        img: img6,
        animation: fadeIn
    },
    {
        width:1 ,
        height: 1,
        left: 8,
        top: 1,
        img: img7,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 1,
        img: img8,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 3,
        img: img9,
        animation: fadeIn
    },
    {
        width: 2,
        height: 2,
        left: 7,
        top: 2,
        img: img10,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 4,
        img: img11,
        animation: fadeIn
    },
    {
        width: 1,
        height: 1,
        left: 8,
        top: 4,
        img: img1,
        animation: fadeIn
    },
    
]

const ImageContainerWrapper = styled.div`
        border: 2px solid black;
        width: 100%;
        height: 100%;
        `;
       

const ImageContainer = styled.div`
        background-image:  url(${props => props.img});
        background-position:center;
        background-size:cover;
        width:100%;
        height:100%;
        animation: ${props => props.animation} 3s;
        &:hover{
            opacity:0.7
        }
    `;

class Gallery extends Component {
    constructor(props){
        super(props);
          this.state = {
            opacity: '1'
          }  
        
    }
   
    

     showHeroes = () => 
        Cells.map((cell, i) => (
            
                <Cell 
                width={cell.width} 
                height={cell.height} 
                left={cell.left} 
                top={cell.top} 
                >
                    <ImageContainerWrapper>
                        <ImageContainer img={cell.img} animation={cell.animation}></ImageContainer>
                    </ImageContainerWrapper>
                    
                    </Cell>
            
        ))
    

    


    render() {

        
       
        return (
            <Fade>
                <Grid
            name={this.props.name}
            style={{opacity:this.state.opacity}}
            columns={'repeat(9,minmax(max-content,auto))'}
            rows={'repeat(6, minmax(150px, auto))'}
            gap='5px'
            >
                
                {this.showHeroes()} 
            </Grid>
            </Fade>
            
        );
    }
}

export default Gallery;