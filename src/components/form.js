import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import mgProfil from '../resources/images/mgProfil.png'
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
    props.emailOn ===false ? "none" : "2px solid darkred"};
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

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            emailOn: ".",
            nameOn: ".",
            border: true,
            name:'',
            email:'',
            message:''
        }
    }

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
      resetFormState = () => {
          this.setState({
              emailOn:'.',
              nameOn:'.'

          })
      }
      
    render() {      
        
         const { name, email, message} = this.state;
        return (
          <div>
            <h1 style={{
              textAlign: 'center', fontWeight: '500',
              fontSize: '3em', marginTop: '15vh', marginBottom: '20vh'
            }} name="contact">Kontakt</h1>
            
            <div name={this.props.name} 
            style={{
                display:'grid', 
                gridTemplateColumns: '50% 50%', 
                gridTemplateRows:'auto',
                marginTop:'5%'}}>
                
                <div style={{ 
                  // border:'2px solid black',
                  gridColumn:'1/2', 
                  display:'grid', 
                  backgroundImage:`url(${mgProfil})`, 
                  backgroundSize:'150%',
                  backgroundRepeat:'no-repeat', 
                  backgroundPosition:'120% 0%'}}> </div>
                <form 
                    netlify="true"
                    id="contact-form"
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST"
                    style={{
                        display: "grid",
                        gridColumn: "2/3",
                        gridRow: "auto",
                        gridTemplateColumns: "100%",
                        gridTemplateRows: "10% 10% 10% 10% 10% 30% 10% 10%",
                        fontSize: "1.7em",
                        // border: "2px solid black",
                        width: "100%",
                        height: "50vh",
                        alignContent: "center",
                        alignItems: "center"
                    }}
                > 
                <input type="hidden" name="form-name" value="contact_form" />
                
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
                            name="name"
                            value={name}
                            onClick={this.nameOnLauncher}
                            onChange={this.handleChange}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="name"
                            style={{
                                outline:'none',
                                display: "grid",
                                gridRow: "2/4",
                                width: "99%",
                                height: "80%",
                                fontSize: "0.7em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none",
                                paddingLeft:'10px',
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
                            name="email"
                            onClick={this.emailOnLauncher}
                            onChange={this.handleChange}
                            value={email}
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            id="email"
                            style={{
                                outline:'none', 
                                display: "grid",
                                gridRow: "2/4",
                                width: "99%",
                                height: "80%",
                                fontSize: "0.7em",
                                backgroundColor: "white",
                                justifySelf: "center",
                                alignSelf: "center",
                                border: "none",
                                paddingLeft:'10px',
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
                            height: '3vh',
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
                            width: '48%',
                            height: '50%',
                            justifySelf: 'center',
                            resize: 'none',
                            border: '2px solid darkred',
                            fontSize: '0.7em',
                            alignSelf: 'start',
                            paddingLeft:'10px',
                            fontFamily:'Josefin Sans, sans-serif'

                        }}></textarea>

                    <ContactSubmit
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            display: 'grid',
                            gridRow: '7/8',
                            justifySelf: 'center',
                            width: '20%',
                            textAlign: 'center',
                            fontFamily:'Satisfy'
                        }}>Submit
                                </ContactSubmit>
                </form>

                

            </div>
            </div>
        );
    }
}

export default Form;
