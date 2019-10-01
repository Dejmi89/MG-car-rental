
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MobileFooter extends Component {
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
                    <div style={{ marginRight:'17%', marginTop:'5%', height:'5vh', width:'8%', display:'flex'}}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} 
                                        style={{
                                            fontSize: this.state.hovered ? '2em': '1em',
                                            color: this.state.hovered ? 'lightblue' : 'darkred',
                                            cursor:this.state.hovered ? 'pointer' : 'default'
                                            }}
                                             
                                            onMouseEnter={this.handleSocialIconStyle}
                                            onMouseLeave={this.handleSocialIconStyle}/>
                        </a>
                        <a href="https://www.instagram.com/kabrioletczerwony/" target="_blank" rel="noopener noreferrer">                
                        <FontAwesomeIcon icon={['fab', 'instagram']} 
                                        style={{
                                            fontSize: this.state.hovered2 ? '2em': '1em', 
                                            marginLeft:'15px',
                                            color:this.state.hovered2 ? 'violet' : 'darkred',
                                            cursor:this.state.hovered2 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle2}
                                            onMouseLeave={this.handleSocialIconStyle2}/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'youtube']} 
                                        style={{
                                            fontSize: this.state.hovered3 ? '2em': '1em',
                                            marginLeft:'15px',
                                            color: this.state.hovered3? 'red' : 'darkred',
                                            cursor:this.state.hovered3 ? 'pointer' : 'default'
                                            }}
                                            onMouseEnter={this.handleSocialIconStyle3}
                                            onMouseLeave={this.handleSocialIconStyle3}/>
                        </a>
                    </div>
            </div>
        );
    }
}

export default MobileFooter;