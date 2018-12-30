import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import Fade, {Zoom} from 'react-reveal';

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

class FormerGallery extends Component {
constructor(props){
    super(props);
      this.state = {
          display:'none',
          foto:'',
          background: '',
          opacity: '1'
      }  
    
}

    render() {
        const showFoto = () => {
            
            let fota = this.props.images;
            console.log(fota);


            this.setState({
                foto: img4,
                opacity: '0.1'
           });

           if (this.state.display == 'none'){
               this.setState({
                   display:'block'
               })
           }else {
               this.setState({
                   display:'none'
               })
           }
           if (this.state.opacity == '1'){
            this.setState({
                opacity:'0.4'
            })
        }else {
            this.setState({
                opacity:'1'
            })
        }

        }

        const GalleryGrid = () => (
            <Grid
                name={this.props.name}
                style={{opacity:this.state.opacity}}
                columns={'repeat(9,minmax(max-content,auto))'}
                rows={'repeat(6, minmax(150px, auto))'}
                gap='5px'
            >   
                <Cell width={7} height={1} left={2} top={1}>
                    <First style={{textAlign:"center", border:'0px'}}>
                        <h1>Galeria</h1>
                    </First>
                </Cell>
                
                <Cell width={3} height={3} left={2} top={2} onClick={this.props.toTop}>
                    <First>
                        <ImageContainer image={img2}></ImageContainer>
                    </First>
                </Cell>
                
                <Cell width={2} height={2} left={5} top={2}>
                    <First>
                        <ImageContainer image={img3}>
                            
                        </ImageContainer>
                    </First>
                </Cell>
                
                <Cell width={1} height={1} left={7} top={2}>
                    <First>
                        <ImageContainer image={img4}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={8} top={2}>
                        <First>
                            <ImageContainer image={img5}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={2} top={5}>
                        <First>
                            <ImageContainer image={img6}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={3} top={5}>
                        <First><ImageContainer image={img7}></ImageContainer></First>
                </Cell>
                    
                <Cell width={1} height={1} left={4} top={5}>
                        <First><ImageContainer image={img8}></ImageContainer></First>
                </Cell>
                    
                <Cell width={2} height={2} left={5} top={4}>
                        <First><ImageContainer image={img9}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={2} height={2} left={7} top={3}>
                        <First><ImageContainer image={img10}></ImageContainer>
                        </First>
                </Cell>
                    
                <Cell width={1} height={1} left={7} top={5}>
                        <First>
                            <ImageContainer onClick={showFoto} image={img1}></ImageContainer>
                        </First>
                </Cell>
                
                <Cell width={1} height={1} left={8} top={5}>
                        
                        <First>
                            <a href='www.wp.pl' target='_blank'>
                            <ImageContainer onClick={showFoto} image={img11} ></ImageContainer>
                            </a>
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

            const ImageClicked = styled.div `
            position:absolute;
            top:10%;
            left:10%;
            width: 80%;
            height: 50vh;
            border: 2px solid black;
            /* background-color:green; */
            background-image: ${props => `url(${props.foto})`};
            background-position:center;

        `;

        return (
            <div style={{position:'relative', width:'100%'}}>
                <Fade>
                    <GalleryGrid/>
                </Fade>
                
                    <ImageClicked style={{display:this.state.display}} foto={this.state.foto}></ImageClicked>
               
                

                
            </div>
        );
    }
}

export default FormerGallery;