import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

//Initialize Firebase

    var config = {
    apiKey: "AIzaSyD3GPqDycv935cZD9-aFIMpecH5Pqq5r5A",
    authDomain: "mg-website-f15cf.firebaseapp.com",
    databaseURL: "https://mg-website-f15cf.firebaseio.com",
    projectId: "mg-website-f15cf",
    storageBucket: "mg-website-f15cf.appspot.com",
    messagingSenderId: "947325652990"
  };
  firebase.initializeApp(config);


  let messagesRef = firebase.database().ref('messages');

  
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            border: '1px solid black',
            animationName: '',
            animationHover: '',
            display: 'none'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let message = this.getInputVal('message');
        let email = this.getInputVal('emailInput');
        this.saveMessage (email, message);
        
        let contactForm = document.getElementById('contact_form');
        contactForm.reset();
    }

    saveMessage = (email, message) => {
        const newMessageRef = messagesRef.push();
        newMessageRef.set({
            customerEmail: email,
            message: message
        })

    }

    getInputVal = (id) => {
        return document.getElementById(id).value;
    }

    handleDisplay = () => {
        this.setState({
            animationHover: 'inton',
            display: 'block'
        })
    }

    handleBorderChange = () => {
        this.setState({
            border: '',
            animationName: 'borderColor',
        })
    }

   


    render() {
        return (
            <div>
                <div className="formWrap">
                    <div className="formBox"></div>
                    <div className="formBox right">
                        <div className="formBoxWrapper">
                            <h2>Contact us!</h2>
                            <p>Write your e-mail and type a message!</p>
                            <form id='contact_form' className="contactForm"  onSubmit={this.handleSubmit}>
                                <textarea id='message' name="message" placeholder="Type your message..."></textarea>
                                <div className="contactFormFields"
                                    onMouseEnter={this.handleDisplay}
                                    onClick={this.handleBorderChange}
                                    style={{
                                        border: this.state.border,
                                        animationName: this.state.animationName,
                                        animationDuration: '2s',
                                        animationFillMode: 'forwards'
                                    }}>
                                    <input name='email' type="email" placeholder="Your e-mail..." id="emailInput"  />
                                    <button type="submit" value="submit" id="submitButton" onSubmit={this.handleSubmit}
                                        style={{
                                            display: this.state.display,
                                            animationName: this.state.animationHover,
                                            animationDuration: '2s',
                                            animationFillMode: 'forwards'
                                        }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Form;