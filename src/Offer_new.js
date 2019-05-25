import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/wedding/0023_M&D_1080p.jpg';

const SlideIn = keyframes`
    40%{
        opacity:0;
    }
    
    100% {
        transform:translate(0,0);
        opacity: 1;

    }
`;

const FadeIn = styled.div`
    animation: fadeIn 2s forwards; 

    @keyframes fadeIn {
        from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
    }
    
`;



class OfferNew extends Component {
    constructor(props){
        super(props);
          this.state = {
            revealedFirst:''
          }  
        
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleOfferReveal);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOfferReveal);
    }

    handleOfferReveal = () => {
        let props = this.props.positionY;

        if (props > '600'){
            this.setState({
                revealedFirst:true
            })
        } 
        
    }
  

    render() {

        const {revealedFirst} = this.state;

        return (
            <div style={{
                width:'100%',
                height:'100vh',
                gridTemplateColumns:'50% 50%',
                gridTemplateRows:'repeat(10,10%)',
                display:'grid',
            }}>
                <div className="title" style={{
                    display:'grid',
                    gridColumn:'1/3',
                    gridRow:'1/3',
                    fontSize:'3em',
                    textAlign:'center',
                    alignSelf:'center',
                    border:'2px solid black'
                }}>
                    Oferta
                </div>
                <div className='photo' style={{
                    width:'80%',
                    height:'85%',
                    gridColumn:'1/2',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(50,2%)',
                    gridTemplateRows:'repeat(50,2%)',
                    display:'grid',
                    // border:'2px solid black',
                    justifySelf:'center',
                    alignSelf:'center',
                    backgroundImage:`url(${img})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    gridGap:'5px'
                    
                }}>
                    
                    <div style={{
                        display:'grid',
                        gridColumn:'16/30',
                        gridRow:'6/34',
                        backgroundColor:'transparent',
                        border:'2px solid white'
                    }}>1</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'9/24',
                        gridRow:'3/6',
                        backgroundColor:'transparent',
                        border:'2px solid white'
                    }}>2</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'2/16',
                        gridRow:'9/14',
                        backgroundColor:'transparent',
                        border:'2px solid white'
                    }}>3</div>
                    {/* <div style={{
                        display:'grid',
                        gridColumn:'30/48',
                        gridRow:'5/10',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>4</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'3/16',
                        gridRow:'14/48',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>5</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'5/9',
                        gridRow:'3/6',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>6</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'16/24',
                        gridRow:'34/51',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>7</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'8/16',
                        gridRow:'6/9',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>8</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'30/44',
                        gridRow:'20/34',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>9</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'30/40',
                        gridRow:'10/20',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>10</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'24/49',
                        gridRow:'34/40',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>11</div>
                     <div style={{
                        display:'grid',
                        gridColumn:'40/49',
                        gridRow:'10/14',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>12</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'38/49',
                        gridRow:'40/48',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>13</div>
                    <div style={{
                        display:'grid',
                        gridColumn:'44/48',
                        gridRow:'15/34',
                        backgroundColor:'transparent',
                        // border:'8px solid white'
                    }}>14</div>
                     */}

                    
                </div>
                <div className ='intro_text' style={{
                    width:'80%',
                    height:'80%',
                    justifySelf:'center',
                    alignSelf:'center',
                    gridColumn:'2/3',
                    gridRow:'3/11',
                    gridTemplateColumns:'repeat(10,10%)',
                    gridTemplateRows:'repeat(10,10%)',
                    display:'grid',
                    border:'2px solid black'
                }}></div>
            </div>

            
           
        );
    }
}

export default OfferNew;