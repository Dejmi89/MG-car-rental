import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Article extends React.Component {
    render() {
        return (
                <div className="article">
                    <div className="articleHeader">
                        <ScrollAnimation animateIn="fadeIn" animateOnce = {true}>
                            <h2>
                                {this.props.heading}
                                <hr/>
                            </h2>
                        </ScrollAnimation>
                    </div>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce = {true}>
                            <div> 
                                {this.props.text}
                            </div>
                        </ScrollAnimation>
                </div>
        );
    }
}

export default Article;