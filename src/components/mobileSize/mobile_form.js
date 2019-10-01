import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

import {
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
const DivLeft = styled.div`
  display: grid;
  grid-column: 1/1;
  grid-row: 1/4;
  border-left: ${props =>
    props.nameOn === false ? "none" : "2px solid darkred"};
  animation: ${props => (props.nameOn === true ? borderLeft : "none")} 2s reverse forwards;
`;
const DivRight = styled.div`
  display: grid;
  grid-column: 4/4;
  grid-row: 1/4;
  border-left: ${props =>
    props.nameOn === false ? "none" : "2px solid darkred"};
  animation: ${props => props.nameOn === true && borderRight} reverse 2s forwards;
`;

const DivUp = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-row: 1/1;
  border-top: ${props =>
    props.nameOn === false ? "none" : "2px solid darkred"};
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
    props.emailOn === false ? "none" : "2px solid darkred"};
  animation: ${props => (props.emailOn === true ? borderLeft : "none")} 2s reverse forwards;
`;
const DivRight2 = styled.div`
  display: grid;
  grid-column: 4/4;
  grid-row: 1/4;
  border-right: ${props =>
    props.emailOn === false ? "none" : "2px solid darkred"};
  animation: ${props => (props.emailOn === true ? borderRight : "none")} reverse 2s forwards;
`;

const DivUp2 = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-row: 1/1;
  border-top: ${props =>
    props.emailOn === false ? "none" : "2px solid darkred"};
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
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class MobileForm extends Component {
    constructor(props){
        super(props);
        this.state={
            emailOn: ".",
            nameOn: ".",
            border: true,
            height: window.innerHeight,
            name:'',
            email:'',
            message:''
        }
    }
    
    setHeight = () => {
        this.setState({
            height: window.innerHeight
        });
        };

        handleChange = e => this.setState({[e.target.name]: e.target.value});

        handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact_form", ...this.state })
          })
            .then(() => alert("Success!"))
            .then(this.handleResetForm)
            .catch(error => alert(error));
    
          e.preventDefault();
        };

        handleResetForm = () => {
          this.setState({
            name:'',
            email:'',
            message:''
          })
        }
    
     componentDidMount() {
        window.addEventListener("resize", this.setHeight);
    }

    componentWillMount() {
      window.addEventListener("resize", this.setHeight);
  }

    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuint"
        });
      }  
      nameOnLauncher = () => {
        if (this.state.nameOn === ".") {
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
      
      preventResize = () => {
        let screenWidth = this.screen.width;
        let screenHeight = this.screen.height;
        this.setState({
          screenX:screenWidth,
          screenY:screenHeight
        })
      }
    
      

    render() {      
        
         const { height, name, email, message } = this.state;
        return (
          
          <div>
            <h1 style={{
              textAlign: 'center', fontWeight: '500',
              fontSize: '1.8em', padding:'10px 0 30px'
              }} name="contact">Kontakt</h1>
            <div name={this.props.name} 
            style={{
                display:'grid', 
                gridTemplateColumns: '10% 80% 10%', 
                gridTemplateRows:'auto',
                marginTop:'5%'}}>
                
                <form
                    netlify="true"
                    // netlify-honeypot="bot-field" data-netlify="true"
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
                        minWidth: "85vw",
                        height: height < 500 ? '160vh' : '55vh',
                        alignContent: "center",
                        alignItems: "center",
                        justifySelf:'center'
                    }}
                >
                  <input type="hidden" name="form-name" value="contact_form" />
                  {/* <input type="hidden" name="bot-field"/> */}
                    <label
                        htmlFor="name"
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
                            width: "70%",
                            height: height < 500 ? '10vh' : '5vh',
                            justifySelf: "center",
                            gridTemplateColumns: "1% 98% 1%",
                            gridTemplateRows: "4% 46% 46% 4%"
                        }}
                    >
                        <DivUp nameOn={this.state.nameOn} />
                        <DivDown nameOn={this.state.nameOn} />
                        <input
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            onClick={this.nameOnLauncher}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="name"
                            style={{
                                outline:'none',
                                display: "grid",
                                gridRow: "2/4",
                                minWidth: "99%",
                                minHeight: "80%",
                                fontSize: "0.8em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none",
                                paddingLeft:'7%',
                                fontFamily:'Josefin Sans, sans-serif'
                            }}
                        />
                        <DivLeft nameOn={this.state.nameOn} />
                        <DivRight nameOn={this.state.nameOn} />
                    </div>
                    <label
                            htmlFor="exampleInputEmail1"
                            style={{
                                display: 'grid',
                                gridRow: '3/4',
                                justifySelf: 'center',
                            }}>Podaj e-mail</label>              
                    <div
                        style={{
                            display: "grid",
                            gridRow: "4/5",
                            width: "70%",
                            height: height < 500 ? '10vh' : '5vh',
                            justifySelf: "center",
                            gridTemplateColumns: "1% 98% 1%",
                            gridTemplateRows: "4% 46% 46% 4%"
                        }}
                    >
                        
                        <DivUp2 emailOn={this.state.emailOn} />
                        <DivDown2 emailOn={this.state.emailOn} />
                        <input
                            
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            onClick={this.emailOnLauncher}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="email"
                            style={{
                                outline:'none',
                                display: "grid",
                                gridRow: "2/4",
                                minWidth: "99%",
                                minHeight: "80%",
                                fontSize: "0.8em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none",
                                paddingLeft:'7%',
                                fontFamily:'Josefin Sans, sans-serif'
                            }}
                        />
                        <DivLeft2 emailOn={this.state.emailOn} />
                        <DivRight2 emailOn={this.state.emailOn} borderOn={this.state.border}/>
                    </div>
                    <label
                        htmlFor="message"
                        style={{
                            display: 'grid',
                            gridRow: '5/6',
                            height: height < 500 ? '8vh' : '3vh',
                            justifySelf: 'center',
                        }}>Twoja wiadomosc</label>
                    <textarea
                        value={message}
                        onChange={this.handleChange}
                        name="message"
                        maxLength='350'
                        className="form-control"
                        rows="5"
                        id="message"
                        style={{
                            display: 'grid',
                            gridRow: '6/7',
                            minWidth: '68%',
                            height: '47%',
                            minHeight:'40%',
                            justifySelf: 'center',
                            resize: 'none',
                            border: '2px solid darkred',
                            fontSize: '0.8em',
                            alignSelf: 'start',
                            paddingLeft:'3%',
                            paddingTop:'2%',
                            fontFamily:'Josefin Sans, sans-serif'

                        }}></textarea>

                    <ContactSubmit
                        
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            fontFamily:'Satisfy',
                            display: 'grid',
                            gridRow: '7/8',
                            justifySelf: 'center',
                            minWidth: '27%',
                            textAlign: 'center',
                            alignItems:'center',
                            fontSize:'0.9em',
                            minHeight:'5vh',
                            height:  height < 500 ? '13vh' : '5vh'
                        }}>Submit
                                </ContactSubmit>
                </form>

                

            </div>
            </div>
        );
    }
}

export default MobileForm;
