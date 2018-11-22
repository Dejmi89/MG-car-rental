
// @flow strict

import React from 'react';
import Sticky from './Sticky.jsx';


class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="headerBackground">
                    <div className="pad">
                        <h1>
                            CZERWONY KABRIOLET NA ŚLUB
                    </h1>
                        <h2>
                            PIĘKNO<span className="dot"></span> STYL <span className="dot"></span> ELEGANCJA
                    </h2>
                    </div>
                    <Sticky />
                </div>

            </div>
        );
    }
}

export default Header;

