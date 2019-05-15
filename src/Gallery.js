import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import img1 from './resources/images/wedding/0022_M&D_1080p.jpg';
import img2 from './resources/images/wedding/0189_M&D_1080p.jpg';
import img3 from './resources/images/wedding/0071_M&D_1080p.jpg';
import img4 from './resources/images/wedding/0070_M&D_1080p.jpg';
import img5 from './resources/images/mg_hood.jpg';
import img6 from './resources/images/steering_wheel.jpg';
import img7 from './resources/images/wedding/0191_M&D_1080p.jpg';
import img8 from './resources/images/wedding/0186_M&D_1080p.jpg';
import img9 from './resources/images/wedding/0184_M&D_1080p.jpg';
import img10 from './resources/images/jaguar-oldtimer-red-auto-163224.jpeg';
import img11 from './resources/images/gearbox_stick.jpg';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const shineEffect = keyframes`
  0% {
    background-color:white;
    transform: translateX(-200px) skewX(-30deg);
    opacity:0;
    width: 0;
    height:100%;
    }
  20%{
    opacity:0.3;
  }
  100% {
    transform: translateX(100px) skewX(-30deg);
    opacity:0;
    width:100%;
    background-color:white;
    height:100%;
  }
`;
const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to {
        opacity:1;
    }
`;
const jumpFromRight = keyframes`
    from{
        opacity:0;

    }
    to {
        opacity:1;
    }
`;

const Cells = [
    
    {
        width: 3,
        height: 3,
        left:2,
        top: 1,
        img: img2,
        animation: shineEffect,
        animationDelay: 1   
    },
    {
        width: 1,
        height: 1,
        left: 2,
        top: 4,
        img: img3,
        animation: shineEffect,
        animationDelay:2
    },
    {
        width: 1,
        height: 1,
        left: 3,
        top: 4,
        img: img4,
        animation: shineEffect,
        animationDelay:1
    },
    
    {
        width: 1,
        height: 1,
        left: 7,
        top: 1,
        img: img6,
        animation: shineEffect,
        animationDelay:3
    },
    {
        width:1 ,
        height: 1,
        left: 8,
        top: 1,
        img: img7,
        animation: shineEffect,
        animationDelay:2
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 1,
        img: img8,
        animation: shineEffect,
        animationDelay:1
    },
    {
        width: 2,
        height: 2,
        left: 5,
        top: 3,
        img: img9,
        animation: shineEffect,
        animationDelay:3 
    },
    {
        width: 2,
        height: 2,
        left: 7,
        top: 2,
        img: img10,
        animation: shineEffect,
        animationDelay: 1
    },
    {
        width: 1,
        height: 1,
        left: 7,
        top: 4,
        img: img11,
        animation: shineEffect,
        animationDelay:2 
    },
    {
        width: 1,
        height: 1,
        left: 8,
        top: 4,
        img: img1,
        animation: shineEffect,
        animationDelay:4 
    },
    
]

const ImageContainer = styled.div`
        background-image:  url(${props => props.img});
        background-position:center;
        background-size:cover;
        width:100%;
        height:100%;
        overflow:hidden;
        &:hover{
            opacity:0.7; 
        }
    `;

const SquareToAnimate2 = styled.div`
     animation: ${props => props.galleryReveal === true ? shineEffect :'none'} 2s forwards;
     `;

const ClickedImageWrapper = styled.div`
    position:fixed;
    z-index:1;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    background-color:rgba(0, 0, 0, 0.5);
    
    
`;

const ClickedImage = styled.div`
    animation: ${fadeIn} 0.5s linear forwards;
    position:fixed;
    top:8%;
    left:17%;
    z-index:1;
    width: 65%;
    height: 85%;
    border:5px solid white;
        a{
            color:black;
            font-size:2.3em;
            position:absolute;
            right:0;
            top:0;
            background-color:white;
            width:4%;
            height:4%;
            display:flex;
            justify-content:center;
            align-items:center;
            text-decoration:none;
            border-radius:5%;
            font-family: 'Satisfy', cursive;
        }
        img{
            width:100%;
            height:100%;
        }
    `;

    const Instastory = styled.div`
        grid-column:3/4;
        grid-row:1/5;
        display:grid ;
        font-size:3.5em;
        width:100%;
        height:100%;
        align-items:center;
        font-family:'Loved by the King';
        animation: ${props => props.galleryReveal === true ? fadeIn :'none'} 6s forwards;                                    
    `;
    const Instastory2 = styled.div`
    display:grid;
    grid-column:1/3;
    grid-row:1/5;
    color:white;
    font-size: 1.6em;
    animation: ${props => props.galleryReveal === true ? fadeIn :'none'} 6s forwards; 
    `;

class Gallery extends Component {
    constructor(props){
        super(props);
          this.state = {
            currentIndex: null,
            isOn: true,
            galleryReveal: false
          }        
    }

    

    openModal = (e,index) => {
        this.setState({
            currentIndex: index
        })
    }

    closeModal = (e) => {
        if (e !== undefined){
            e.preventDefault();
        }
        this.setState({
            currentIndex: null
        })
    }
    findPrev = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex -1
        }));
      }
      findNext = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      }

     showHeroes = () => 
        Cells.map((cell, i) => (
                
                <Cell key={i}
                width={cell.width} 
                height={cell.height} 
                left={cell.left} 
                top={cell.top} 
                onClick={(e) => this.openModal(e,i)} 
                >   
                        <ImageContainer img={cell.img} key={cell.img}>
                              <SquareToAnimate2 galleryReveal={this.props.galleryReveal} /> 
                        </ImageContainer>
                    
                </Cell>
                
        ))
    
    render() {
        return (
            
                <div>
                <h1 style={{
                    textAlign: 'center', fontWeight: '500',
                    fontSize: '3em', paddingTop: '120px'
                }} name="gallery" >Galeria</h1>
                    <Grid
                        name={this.props.name}
                        style={{opacity:this.state.opacity}}
                        columns={'repeat(9,minmax(max-content,auto))'}
                        rows={'repeat(4, minmax(150px, auto))'}
                        gap='5px'
                        
                    >
                        
                        {this.showHeroes()} 
                         
                                <div style={{
                                    display:'grid',
                                    gridColumn:'4/5',
                                    gridRow:'4/5',
                                    gridTemplateColumns:'33% 33% 32%',
                                    gridTemplateRows:'25% 25% 25% 25%',
                                    width:'100%', 
                                    height:'100%', 
                                    textAlign:'center',
                                    // padding:'10px 10px 20px 30px',
                                    fontSize:'1.5em',
                                    backgroundColor:'#ed9aa9',
                                    textAlign:'center',
                                    display:'grid',
                                    justifyContent:'center',
                                    justifySelf:'center',
                                    
                                                                       
                                    
                                    }}>
                                    <a href="https://www.instagram.com/" target="blank" 
                                        style={{
                                            display:'grid', 
                                            gridColumn:'1/4',
                                            gridRow:'1/5', 
                                            gridTemplateColumns:'33% 33% 32%',
                                            gridTemplateRows:'25% 25% 25% 25%',
                                            textDecoration:'none'
                                            // border:'2px solid black'
                                            }}> 
                                        <Instastory galleryReveal={this.props.galleryReveal}>
                                                <FontAwesomeIcon   
                                                style={{color:'white', }}icon={['fab', 'instagram']} /> 
                                        </Instastory>
                                        <Instastory2 galleryReveal={this.props.galleryReveal}>
                                            <p>Sledz <br/>nas na <br/>Instagramie!</p>
                                            </Instastory2>
                                        
                                    </a>
                                   
                                </div>
                    
                        
                    </Grid>
                    <GalleryModal 
                        closeModal={this.closeModal} 
                        findNext={this.findNext}
                        findPrev={this.findPrev}
                        imgSrc={this.state.currentIndex === null ? null :Cells[this.state.currentIndex].img}
                        hasPrev={this.state.currentIndex  > 0}
                        hasNext={this.state.currentIndex +1 < Cells.length}
                         />
                </div>   
            
        );
    }
}

export default Gallery;



class GalleryModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }  
    componentWillUnMount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 27 )
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    
    render() {
        const {closeModal, imgSrc, findNext,findPrev, hasNext, hasPrev } = this.props;
        if(imgSrc === null){
            return null;
        }

        return (
            <div>
                <ClickedImageWrapper>
                    <ClickedImage>
                       <a href="..." onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                       {hasPrev && <a href="..." onClick={findPrev} className='left' onKeyDown={this.handleKeyDown}
                                style={{
                                    left:0,
                                    top:'50%'
                                }}>&lsaquo;</a>}
                       {hasNext && <a href="..." onClick={findNext} onKeyDown={this.handleKeyDown}
                                style={{
                                    right:0,
                                    top:'50%'
                                }}>&rsaquo;</a>}
                        <img src = {imgSrc} alt='carImage' />
                    </ClickedImage>
                </ClickedImageWrapper>
            </div>
        );
    }
}

