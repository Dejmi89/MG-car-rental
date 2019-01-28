import React, { Component } from 'react';
import axios from 'axios';
import DivToAnimateLeft from './inputAnimation';
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
    
    

    render() {

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
                        {/* <div 
                        className="form-group"
                        style={{
                            display:'grid',
                            justifySelf:'center',
                            // alignContent:'center',
                            width:'50%',
                            height:'3vh',
                            gridTemplateColumns: "50% 50%",
                            border:'2px solid black'
                        }}> */}
                            {/* <div
                                style={{
                                border: "2px solid black",
                                // gridColumn: "1/3",
                                // gridRow: "1/1",
                                width:'80%',
                                display: "grid",
                                justifySelf:'center',
                                alignContent: "start",
                                justifyContent: "center",
                                gridTemplateColumns: "1% 98% 1%",
                                gridTemplateRows: "5% 45% 45% 5%"
                                }}
                                > */}
                            <label for="name" 
                                        style={{
                                            alignSelf:'start',
                                            justifySelf:'center',
                                            display:'grid',
                                            gridRow:'1/2',
                                            // height:'20%',
                                            // border:'2px solid black'
                                        }}>Podaj imie</label>
                                    
                            <input
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        style={{
                                            border: '1px solid darkred',
                                            display:'grid',
                                            gridRow:'2/3',
                                            width: '50%',
                                            height: '5vh',
                                            fontSize: '1.2em',
                                            backgroundColor: 'white',
                                            justifySelf: 'center',
                                            // alignSelf: 'center',
                                            }}
                                            />
                            {/* </div> */}
                            
                        {/* </div> */}
                            {/* <div 
                            className="form-group"
                            style={{
                                display:'grid',
                                justifySelf:'center',
                                // border: '2px solid black',
                                alignItems:'center',
                                width:'40%',
                                height:'5vh'
                            }}
                            > */}
                            <label 
                                for="exampleInputEmail1"
                                style={{
                                    display:'grid',
                                    gridRow:'3/4',
                                    justifySelf:'center',
                                }}>Podaj e-mail</label>
                            <input
                            type="email" 
                            className="form-control" 
                            id="email"
                            aria-describedby="emailHelp" 
                            style={{
                                display:'grid',
                                gridRow:'4/5',
                                width:'50%',
                                height:'3vh',
                                justifySelf:'center'
                            }}
                            />
                        
                        {/* <div 
                            className="form-group"
                            style={{
                                justifySelf:'center',
                                display:'grid',
                                // border:'2px solid black',
                                width:'90%',
                                height:'5vh',
                                
                            }}> */}
                            <label 
                                for="message"
                                style={{
                                    display:'grid',
                                    gridRow:'5/6',
                                    justifySelf:'center'
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
                                fontSize:'1em'
                                
                            }}></textarea>
                        {/* </div> */}
                        <ContactSubmit onMouseEnter={this.print}
                            type="submit" 
                            className="btn btn-primary"
                            style={{
                                display:'grid',
                                gridRow:'7/8',
                                justifySelf:'center',
                                width:'20%',
                                textAlign:'center'
                                // height:'5vh',
                                // marginTop:'10%'
                                }}>submit
                                </ContactSubmit>
                            {/* </div> */}
                    </form>

                

            </div>
        );
    }
}

export default Form;