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
const borderOpacityOn = keyframes`
    0% {
        border:2px solid black;
    }
    100%{
        border:0;
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
const DivLeft = styled.div`
  display: grid;
  grid-column: 1/1;
  grid-row: 1/4;
  border-left: ${props =>
    props.nameOn == false ? "none" : "2px solid darkred"};
  animation: ${props => (props.nameOn === true ? borderLeft : "none")} 2s reverse forwards;
`;
const DivRight = styled.div`
  display: grid;
  grid-column: 4/4;
  grid-row: 1/4;
  border-left: ${props =>
    props.nameOn == false ? "none" : "2px solid darkred"};
  animation: ${props => props.nameOn === true && borderRight} reverse 2s forwards;
`;

const DivUp = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-row: 1/1;
  border-top: ${props =>
    props.nameOn == false ? "none" : "2px solid darkred"};
  animation: ${props => props.nameOn === true && borderUp} 2s reverse forwards;
`;
const DivDown = styled.div`
  display: grid;
  justify-self: center;
  grid-column: 1/4;
  grid-row: 4/4;
  border-bottom: 2px solid darkred;
  width: 100%;
  animation: ${props => (props.nameOn === true ? borderDown : "none")} 2s forwards;
`;

const DivLeft2 = styled.div`
  display: grid;
  grid-column: 1/1;
  grid-row: 1/4;
  border-left: ${props =>
    props.emailOn == false ? "none" : "2px solid darkred"};
  animation: ${props => (props.emailOn === true ? borderLeft : "none")} 2s reverse forwards;
`;
const DivRight2 = styled.div`
  display: grid;
  grid-column: 4/4;
  grid-row: 1/4;
  border-right: ${props =>
    props.emailOn == false ? "none" : "2px solid darkred"};
  animation: ${props => (props.emailOn === true ? borderRight : "none")} reverse 2s forwards;
`;

const DivUp2 = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-row: 1/1;
  border-top: ${props =>
    props.emailOn == false ? "none" : "2px solid darkred"};
  animation: ${props => (props.emailOn === true ? borderUp : "none")} 2s reverse forwards;
  
`;
const DivDown2 = styled.div`
  display: grid;
  justify-self: center;
  grid-column: 1/4;
  grid-row: 4/4;
  border-bottom: 2px solid darkred;
  width: 100%;
  animation: ${props => (props.emailOn === true ? borderDown : "none")} 2s forwards;
  
`;

class MobileForm extends Component {
    constructor(props){
        super(props);
        this.state={
            emailOn: ".",
            nameOn: ".",
            border: true
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
        if (this.state.nameOn == ".") {
          this.setState({
            nameOn: true
          });
        } else {
          this.setState({
            nameOn: false
          });
        }
      };
      emailOnLauncher = () => {
        if (this.state.emailOn === ".") {
          this.setState({
            emailOn: true
          });
        } else {
          this.setState({
            emailOn: false
          });
        }
      };
      resetFormState = () => {
          this.setState({
              emailOn:'.',
              nameOn:'.'
          })
      }
      
    render() {      
        
         
        return (
            <div name={this.props.name} 
            style={{
                display:'grid', 
                gridTemplateColumns: '10% 80% 10%', 
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
                        fontSize: "1.2em",
                        // border: "2px solid black",
                        width: "100%",
                        height: "50vh",
                        alignContent: "center",
                        alignItems: "center"
                    }}
                >
                    <label
                        for="name"
                        style={{
                            alignSelf: "start",
                            justifySelf: "center",
                            display: "grid",
                            gridRow: "1/2"
                        }}
                    >
                        Podaj imie
          </label>
                    <div
                        style={{
                            display: "grid",
                            gridRow: "2/3",
                            width: "50%",
                            height: "5vh",
                            justifySelf: "center",
                            gridTemplateColumns: "1% 98% 1%",
                            gridTemplateRows: "4% 46% 46% 4%"
                        }}
                    >
                        <DivUp nameOn={this.state.nameOn} />
                        <DivDown nameOn={this.state.nameOn} />
                        <input
                            onClick={this.nameOnLauncher}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="name"
                            style={{
                                display: "grid",
                                gridRow: "2/4",
                                width: "99%",
                                height: "80%",
                                fontSize: "0.9em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none"
                            }}
                        />
                        <DivLeft nameOn={this.state.nameOn} />
                        <DivRight nameOn={this.state.nameOn} />
                    </div>
                    <label
                            for="exampleInputEmail1"
                            style={{
                                display: 'grid',
                                gridRow: '3/4',
                                justifySelf: 'center',
                            }}>Podaj e-mail</label>              
                    <div
                        style={{
                            display: "grid",
                            gridRow: "4/5",
                            width: "50%",
                            height: "5vh",
                            justifySelf: "center",
                            gridTemplateColumns: "1% 98% 1%",
                            gridTemplateRows: "4% 46% 46% 4%"
                        }}
                    >
                        
                        <DivUp2 emailOn={this.state.emailOn} />
                        <DivDown2 emailOn={this.state.emailOn} />
                        <input
                            onClick={this.emailOnLauncher}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="email"
                            style={{
                                display: "grid",
                                gridRow: "2/4",
                                width: "99%",
                                height: "80%",
                                fontSize: "0.9em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none"
                            }}
                        />
                        <DivLeft2 emailOn={this.state.emailOn} />
                        <DivRight2 emailOn={this.state.emailOn} borderOn={this.state.border}/>
                    </div>
                    <label
                        for="message"
                        style={{
                            display: 'grid',
                            gridRow: '5/6',
                            height: '3vh',
                            justifySelf: 'center',
                        }}>Twoja wiadomosc</label>
                    <textarea
                        maxLength='350'
                        className="form-control"
                        rows="5"
                        id="message"
                        style={{
                            display: 'grid',
                            gridRow: '6/7',
                            width: '50%',
                            height: '50%',
                            justifySelf: 'center',
                            resize: 'none',
                            border: '2px solid darkred',
                            fontSize: '0.9em',
                            alignSelf: 'start'

                        }}></textarea>

                    <ContactSubmit
                        onClick={this.resetFormState}
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            display: 'grid',
                            gridRow: '7/8',
                            justifySelf: 'center',
                            width: '20%',
                            textAlign: 'center',
                            alignItems:'center',
                            fontSize:'0.7em'
                        }}>submit
                                </ContactSubmit>
                </form>

                

            </div>
        );
    }
}

export default MobileForm;