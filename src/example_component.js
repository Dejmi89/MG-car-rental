import React, { Component } from 'react';
import Gallery from './Gallery';
import styled, {keyframes} from 'styled-components';
import {Grid, Cell} from 'styled-css-grid';
import img2 from './resources/images/gearbox_stick.jpg';
import img3 from './resources/images/mercedes_red.jpg';


const Cells = [{ width: 7, height: 2 ,left: 3,top: 2,  img: img2

},
{ width: 4, height: 2 ,left: 2,top: 2 , img: img3
},
{ width: 3, height: 1 ,left: 3,top: 3, img: img2
}
]

const Beauty = styled.div`
        background-image: url(${props => props.img});
        width:100px;
        height:200px;
    `;

class Example extends Component {

   

     showHeroes = () => 
        Cells.map((cell, i) => (
            
                <Cell width={cell.width} height={cell.height} left={cell.left} img={cell.img}>
                    <div style={{
                        width:'200px',
                        height:'200px',
                        backgroundColor: 'green',
                        // backgroundImage: url(${props => props.img}),
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                    }}></div>
                    <Beauty img={img2} />
                    <Beauty img={img3} />
                    </Cell>
            
        ))
    

    


    render() {

        
       
        return (
            <Grid>
                {this.showHeroes()}
                
            </Grid>
        );
    }
}

export default Example;