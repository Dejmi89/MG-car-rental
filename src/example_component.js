import React, { Component } from 'react';
import Gallery from './Gallery';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';

const Cells = [{ width: 7, height: 2 ,left: 3,top: 2,  img: `url(/resources/images/mercedes_red.jpg)`

},
{ width: 4, height: 2 ,left: 2,top: 2 , img: 'url(./resources/images/mercedes_red.jpg)'
},
{ width: 3, height: 1 ,left: 3,top: 3, img: 'url(./resources/images/mercedes_red.jpg)'
}
]

class Example extends Component {

   

     showHeroes = () => 
        Cells.map((cell, i) => (
            
                <Cell width={cell.width} height={cell.height} left={cell.left} img={cell.img}>
                    <div style={{
                        width:'200px',
                        height:'200px',
                        backgroundColor: 'green',
                        backgroundImage: this.props.img,
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                    }}></div>
                    </Cell>
            
        ))
    

    


    render() {

        const Beauty = styled.div`
        background-image: ${props => `url(${props.img})`};
        width:100%;
        height:20vh;
    `;
       
        return (
            <Grid>
                {this.showHeroes()}
            </Grid>
        );
    }
}

export default Example;