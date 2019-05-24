import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img7 from './resources/images/wedding/0191_M&D_1080p.jpg';
import img from './resources/images/wedding/0070_M&D_1080p.jpg';

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
                width:'50%',
                height:'50vh',
                border:'2px solid black',
                gridTemplateColumns:'repeat(20,5%)',
                gridTemplateRows:'repeat(100,1%)',
                display:'grid',
                backgroundImage:`url(${img})`,
                backgroundPosition:'center',
                backgroundSize:'cover',
            }}>
                <div style={{
                display:'grid',
                gridColumn:'1/75',
                gridRow:'2/3',
                // border:'2px solid black',
                backgroundColor:'white'
            }}>
                
            </div>
            <div style={{
                display:'grid',
                gridColumn:'4/5',
                gridRow:'1/65',
                // border:'2px solid black',
                backgroundColor:'white'
            }}>
                
            </div>
            </div>
        );
    }
}

export default OfferNew;