import React from 'react';
import Reveal from 'react-reveal';

class Gallery extends React.Component {
    render() {
        return (
            <Reveal fraction={0.9}>
                <h3>The gallery
                    <hr />
                </h3>
                <div className="galleryWrap">
                    <div className="photoBox a"></div>
                    <div className="photoBox b"></div>
                    <div className="photoBox c"></div>
                    <div className="follow">
                        <p>Follow us on Instagram</p>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="photoBox d"></div>

                </div>
            </Reveal>

        );
    }
}

export default Gallery;