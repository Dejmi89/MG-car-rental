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
            <div name={this.props.name}>
                
                    <form 
                    id="contact-form" 
                    onSubmit={this.handleSubmit.bind(this)} 
                    method="POST"
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        flexWrap:'nowrap',
                        border:'2px solid black',
                        width:'40%',
                        height:'30vh'
                        }}>
                        <div 
                        className="form-group"
                        style={{
                            width:'40%',
                            border:'2px solid black'
                        }}>
                            <label for="name" style={{color:'green'}}>Podaj imię</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            style={{
                                width:'100%',
                                marginLeft:'10px'
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Podaj E-mail</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="message">Twoja wiadomość</label>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                

            </div>
        );
    }
}

export default Form;