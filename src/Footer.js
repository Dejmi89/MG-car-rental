
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
            scrolling: false,
            hovered: false,
            hovered2: false,
            hovered3: false
        };
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent:'flex-end', marginTop:'5%'}}>
                    <div style={{ marginRight:'2%'}}>
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