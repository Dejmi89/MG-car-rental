import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

const borderUp = keyframes`
    0% {
    width:0;
    transform:translate(200px);
    opacity:0;
    }   
    100% {
    width:100%;
    opacity:1;
    }
`;

const borderDown = keyframes`
    0% {
    width:100%;
    opacity:1;
    }
    50%{
      width: 150%;
      opacity:0.5
    }
    100% {
    width:100%;
    opacity:1;
    color:yellow;
  }
`;

const borderRight = keyframes`
    0% {
    height:0;
    transform:translate(0,-200px);
    opacity:0;
    }
    100% {
    height:100%;
    opacity:1;
  }
`;
const borderLeft = keyframes`
    0% {
    height:0;
    transform:translate(0,200px);
    opacity:0;
    }
    100% {
    height:100%;
    opacity:1;
  }
`;

const DivLeft = styled.div `
display:grid;
grid-column:1/1;
grid-row:1/4;
border-left:2px solid darkred;
animation:${props => props.animate === true? borderLeft : 'none' } 2s reverse forwards;
`;
const DivRight = styled.div `
display:grid;
grid-column:4/4;
grid-row:1/4;
border-left:2px solid darkred;
animation:${props => props.animate === true ? borderRight : 'none' } reverse 2s forwards;
`;

const DivUp = styled.div `
display:grid;
grid-column:1/4;
grid-row:1/1;
border-top:2px solid darkred;
animation:${props => props.animate === true ? borderUp : 'none' } 2s reverse forwards;
`;
const DivDown = styled.div `
display:grid;
justify-self:center;
grid-column:1/4;
grid-row:4/4;
border-bottom:2px solid darkred;
width: 100%;
animation:${props => props.animate ===true ? borderDown : 'none' } 2s forwards;
`;

class Input extends Component {
    render() {
        return (
            <div>
                <DivUp nameOn={this.state.nameOn}/>
                    <DivDown nameOn={this.state.nameOn}/>
                                <input
                                        onClick={this.nameOnLauncher}
                                        autoComplete='off'
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        style={{
                                            display:'grid',
                                            gridRow:'2/4',
                                            width: '99%',
                                            height: '80%',
                                            fontSize: '1.2em',
                                            backgroundColor: 'white',
                                            justifySelf: 'center',
                                            alignSelf:'center',
                                            border:'none'
                                            }}
                                            />
                    <DivLeft nameOn={this.state.nameOn}/>
                    <DivRight nameOn={this.state.nameOn}/>
            </div>
        );
    }
}

export default Input;