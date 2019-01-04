import React , { Component }from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import Fade from 'react-reveal';

import img from './resources/images/gearbox_stick.jpg';
import img2 from './resources/images/mg_hood.jpg';
import img3 from './resources/images/maskaPrzod.jpg';

const text1 = 'kdsjgbkdjfgbjdkhgbjdfgbjdb';
const text2 = 'kdsjgbkdjfgbjdkhgbjdfgbjdb';
const text3 = 'kdsjgbkdjfgbjdkhgbjdfgbjdb';

const fadeIn = keyframes`
    from{
        opacity:0
        }
    to{
        opacity:1
        }
        `;


const Cells = [
  
       {
        width: 1,
        height: 2,
        left:1,
        top: 1,
        img: img,
        animation: fadeIn  
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 1,
        img: '',
        animation: '',
        text:text2   
    },
    {
        width: 1,
        height: 2,
        left:1,
        top: 3,
        img: '',
        animation: '',
        text: text1   
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 3,
        img: img2,
        animation: fadeIn  
    },
    {
        width: 1,
        height: 2,
        left:1,
        top: 5,
        img: img3,
        animation: fadeIn   
    },
    {
        width: 1,
        height: 2,
        left:2,
        top: 5,
        img: '',
        animation: '',
        text:text3   
    }
    
]



const ImageContainerWrapper = styled.div`
        /* border: 2px solid black; */
        width: 100%;
        height: 100%;
        border-radius:1%;
        overflow:hidden;
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






class Offer extends Component {
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
                    <ImageContainer 
                    img={cell.img}
                    animation={cell.animation ? cell.animation : ''}
                    >
                    <Fade>
                    {cell.text ? cell.text : ''}
                    </Fade>
                    
                    </ImageContainer>
                        
                    
                    
                </ImageContainerWrapper>
                
                </Cell>
        
    ))
    render() {
        return (
            <Grid
            name={this.props.name}
                style={{opacity:this.state.opacity}}
                columns={'repeat(2,minmax(max-content,auto))'}
                rows={'repeat(6, minmax(200px, auto))'}
                gap='10px'
                >
            {this.showHeroes()}
            </Grid>
        );
    }
}

export default Offer;




