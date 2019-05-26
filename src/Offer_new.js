import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/wedding/0023_M&D_1080p.jpg';
import img1 from './resources/images/wedding/mgPNG/1.png';
import img2 from './resources/images/wedding/mgPNG/2.png';
import img3 from './resources/images/wedding/mgPNG/3.png';
import img4 from './resources/images/wedding/mgPNG/4.png';
import img5 from './resources/images/wedding/mgPNG/5.png';
import img6 from './resources/images/wedding/mgPNG/6.png';
import img7 from './resources/images/wedding/mgPNG/7.png';
import img8 from './resources/images/wedding/mgPNG/8.png';
import img9 from './resources/images/wedding/mgPNG/9.png';
import img10 from './resources/images/wedding/mgPNG/10.png';
import img11 from './resources/images/wedding/mgPNG/11.png';
import img12 from './resources/images/wedding/mgPNG/12.png';
import img13 from './resources/images/wedding/mgPNG/13.png';
import img14 from './resources/images/wedding/mgPNG/14.png';

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

const PhotoGridContainer = styled.div`
    display:grid;
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};;
    background-image:url(${props => props.img});
    background-size:cover;
    background-position:center;
    margin:${props => props.margin};
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
                    gridTemplateColumns:'repeat(53,1.88%)',
                    gridTemplateRows:'repeat(40,2.5%)',
                    display:'grid',
                    // border:'2px solid black',
                    justifySelf:'center',
                    alignSelf:'center'                    
                }}>
                    
                    <PhotoGridContainer img={img1} gridColumn={'14/30'} gridRow={'4/30'} margin={'3%'}/>
                    <PhotoGridContainer img={img2} gridColumn={'30/39'} gridRow={'3/15'} margin={'5%'}/>
                    <PhotoGridContainer img={img3} gridColumn={'30/46'} gridRow={'15/24'} margin={'3%'}/>
                    <PhotoGridContainer img={img4} gridColumn={'30/43'} gridRow={'24/31'} margin={'5%'}/>
                    <PhotoGridContainer img={img5} gridColumn={'39/49'} gridRow={'1/15'} margin={'5%'}/>
                    <PhotoGridContainer img={img6} gridColumn={'5/14'} gridRow={'12/35'} margin={'5%'}/>
                    {/* <PhotoGridContainer img={img7} gridColumn={'1/5'} gridRow={'18/40'} margin={'5%'}/> */}
                    <PhotoGridContainer img={img8} gridColumn={'9/14'} gridRow={'1/12'} margin={'5%'}/>
                    <PhotoGridContainer img={img9} gridColumn={'43/46'} gridRow={'24/40'} margin={'5%'}/>
                    <PhotoGridContainer img={img10} gridColumn={'46/49'} gridRow={'15/34'} margin={'3%'}/>
                    <PhotoGridContainer img={img11} gridColumn={'49/54'} gridRow={'13/32'} margin={'5%'}/>
                    <PhotoGridContainer img={img12} gridColumn={'49/54'} gridRow={'32/41'} margin={'7%'}/>
                    <PhotoGridContainer img={img13} gridColumn={'18/26'} gridRow={'30/41'} margin={'5%'}/>
                    <PhotoGridContainer img={img14} gridColumn={'38/43'} gridRow={'31/36'} margin={'5%'}/>
                    

                    
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