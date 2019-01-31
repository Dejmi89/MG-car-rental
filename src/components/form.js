import React, { Component } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';

import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from "react-scroll";

  const changeButtonColor = keyframes `
    0%{
        background-color:white;
        color:darkred;
    }
    100%{
        background-color:darkred;
        color:white;
        border: 1px solid white;
    }
  `;

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

  const ContactSubmit = styled.button`
  width: 50%;
  height: 4vh;
  font-size: 1em;
  color: darkred;
  border: 1px solid darkred;
  background-color: white;
  &:hover {
    animation: ${changeButtonColor} 1s forwards;
  }
`;

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            emailOn: false,
            nameOn: false
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:9000/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    

    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuint"
        });
      }
    nameOnLauncher = () => {
        this.setState({
            nameOn:!this.state.nameOn
        })
    }
    emailOnLauncher = () => {
        this.setState({
            emailOn:!this.state.emailOn
        })
    }
    

    render() {

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

            

        return (
            <div name={this.props.name} 
            style={{
                display:'grid', 
                gridTemplateColumns:'50% 50%', 
                gridTemplateRows:'auto',
                marginTop:'5%'}}>
                
                    <form 
                    id="contact-form" 
                    onSubmit={this.handleSubmit.bind(this)} 
                    method="POST"
                    style={{
                        display: "grid",
                        gridColumn: "2/3",
                        gridRow: "auto",
                        gridTemplateColumns: "100%",
                        gridTemplateRows: "10% 10% 10% 10% 10% 30% 10% 10%",
                        fontSize:'1.7em',
                        // border: "2px solid black",
                        width: "100%",
                        height: "50vh",
                        alignContent:'center',
                        alignItems:'center'
                        
                        }}
                        >
                        
                            <label for="name" 
                                        style={{
                                            alignSelf:'start',
                                            justifySelf:'center',
                                            display:'grid',
                                            gridRow:'1/2',
                                            // height:'20%',
                                            // border:'2px solid black'
                                        }}>Podaj imie</label>
                            <div style={{
                                display:'grid', 
                                gridRow:'2/3',  
                                width:'50%', 
                                height:'5vh',
                                justifySelf:'center',
                                gridTemplateColumns:'1% 98% 1%',
                                gridTemplateRows: "4% 46% 46% 4%"
                            }}>     

                                <DivUp nameOn={this.state.nameOn}/>
                                <DivDown nameOn={this.state.nameOn}/>
                                <input
                                        onClick={this.nameOnLauncher}
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
                       
                            <label 
                                for="exampleInputEmail1"
                                style={{
                                    display:'grid',
                                    gridRow:'3/4',
                                    justifySelf:'center',
                                }}>Podaj e-mail</label>
                            <div style={{
                                display:'grid', 
                                gridRow:'4/5',  
                                width:'50%', 
                                height:'5vh',
                                justifySelf:'center',
                                gridTemplateColumns:'1% 98% 1%',
                                gridTemplateRows: "4% 46% 46% 4%"
                                }}>
                                
                                <DivUp animate={this.state.emailOn}/>
                                <DivDown animate={this.state.emailOn}/>
                                <input
                                    onClick={this.emailOnLauncher}
                                    type="email" 
                                    className="form-control" 
                                    id="email"
                                    aria-describedby="emailHelp" 
                                    style={{
                                        // border: '1px solid blue',
                                        border:'none',
                                        // borderBottom:'2px solid darkred',
                                        display:'grid',
                                        gridRow:'2/4',
                                        width: '99%',
                                        height: '80%',
                                        fontSize: '1.2em',
                                        backgroundColor: 'white',
                                        justifySelf: 'center',
                                        alignSelf:'center'
                                        }}
                                />
                                <DivLeft animate={this.state.emailOn}/>
                                <DivRight animate={this.state.emailOn}/>
                            </div>
                        
                            <label 
                                for="message"
                                style={{
                                    display:'grid',
                                    gridRow:'5/6',
                                    height:'3vh',
                                    justifySelf:'center',
                                }}>Twoja wiadomosc</label>
                            <textarea 
                            maxLength='350'
                            className="form-control" 
                            rows="5" 
                            id="message"
                            style={{
                                display:'grid',
                                gridRow:'6/7',
                                width:'50%',
                                height:'50%',
                                justifySelf:'center',
                                resize:'none',
                                border:'1px solid darkred',
                                fontSize:'1em',
                                alignSelf:'start'
                                
                            }}></textarea>
                        
                        <ContactSubmit onMouseEnter={this.print}
                            type="submit" 
                            className="btn btn-primary"
                            style={{
                                display:'grid',
                                gridRow:'7/8',
                                justifySelf:'center',
                                width:'20%',
                                textAlign:'center'
                                }}>submit
                                </ContactSubmit>
                    </form>

                

            </div>
        );
    }
}

export default Form;