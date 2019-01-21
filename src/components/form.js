import React, { Component } from 'react';
import axios from 'axios';
import MediaQueries from 'react-responsive';
import styled from 'styled-components';
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from "react-scroll";

const Form2 = styled.form ``; 

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
                        gridTemplateRows: "auto",
                        fontSize:'1.7em',
                        // border: "2px solid black",
                        width: "100%",
                        height: "50vh"
                        }}>
                        <div 
                        className="form-group"
                        style={{
                            display:'grid',
                            justifySelf:'center',
                            alignItems:'center',
                            width:'40%',
                            height:'5vh',
                            // border:'2px solid black'
                        }}>
                            <label for="name" 
                                    style={{
                                        justifySelf:'center'
                                        }}>Podaj imie</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            style={{
                                width:'80%',
                                height:'3vh',
                                display:'grid',
                                justifySelf:'center'
                                
                            }}
                            />
                        </div>
                        <div 
                            className="form-group"
                            style={{
                                display:'grid',
                                justifySelf:'center',
                                // border: '2px solid black',
                                alignItems:'center',
                                width:'40%',
                                height:'5vh'
                            }}
                        >
                            <label 
                                for="exampleInputEmail1"
                                style={{
                                    justifySelf:'center'
                                }}>Podaj e-mail</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            style={{
                                width:'80%',
                                height:'3vh',
                                justifySelf:'center'
                            }}/>
                        </div>
                        <div 
                            className="form-group"
                            style={{
                                justifySelf:'center',
                                display:'grid',
                                // border:'2px solid black',
                                width:'40%',
                                height:'5vh',
                            }}>
                            <label 
                                for="message"
                                style={{
                                    justifySelf:'center'
                                }}>Twoja wiadomosc</label>
                            <textarea 
                            maxLength='350'
                            className="form-control" 
                            rows="7" 
                            id="message"
                            style={{
                                width:'90%',
                                justifySelf:'center',
                                resize:'none',
                                
                            }}></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            style={{
                                justifySelf:'center',
                                width:'20%',
                                height:'5vh',
                                marginTop:'10%'
                                }}>Submit</button>
                    </form>

                

            </div>
        );
    }
}

export default Form;