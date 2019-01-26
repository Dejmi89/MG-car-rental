
import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SCWrapper from './Header';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            hovered2: false,
            hovered3: false
        };
    }

    handleSocialIconStyle = () => {
        this.setState({
            hovered: !this.state.hovered,
        })
    }
    handleSocialIconStyle2 = () => {
        this.setState({
            hovered2: !this.state.hovered2
        })
    }
    handleSocialIconStyle3 = () => {
        this.setState({
            hovered3: !this.state.hovered3
        })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent:'flex-end'}}>
                    <div style={{ marginRight:'2%', marginBottom:'1%', height:'5vh', width:'8%', display:'flex'}}>
        
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} 
                                        style={{
                                            fontSize: this.state.hovered ? '3em': '2em',
                                            color: this.state.hovered ? 'lightblue' : 'darkred'
                                            }}
                                             
                                            onMouseEnter={this.handleSocialIconStyle}
                                            onMouseLeave={this.handleSocialIconStyle}/>
                                            
                        <FontAwesomeIcon icon={['fab', 'instagram']} 
                                        style={{
                                            fontSize: this.state.hovered2 ? '3em': '2em', 
                                            marginLeft:'15px',
                                            color:this.state.hovered2 ? 'violet' : 'darkred'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle2}
                                            onMouseLeave={this.handleSocialIconStyle2}/>
                        <FontAwesomeIcon icon={['fab', 'youtube']} 
                                        style={{
                                            fontSize: this.state.hovered3 ? '3em': '2em',
                                            marginLeft:'15px',
                                            color: this.state.hovered3? 'red' : 'darkred'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle3}
                                            onMouseLeave={this.handleSocialIconStyle3}/>
                    </div>
            </div>
        );
    }
}

export default Footer;