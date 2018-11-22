
// @flow strict

import React from 'react';

class Sticky extends React.Component { 

    render() {
        return (
            <div id = "stickyParent" >
                 <div className="wrapperNav">
                    {/* <div id = 'hideMenu' className='box'> x </div> */}
                    <div className='headerHome box'>Home</div>
                    <div className='headerOffer box'>Offer</div>
                    <div className='headerLogo box'></div>
                    <div className='headerGallery box'>Gallery</div>
                    <div className='headerContact box'>Contact</div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Sticky;
