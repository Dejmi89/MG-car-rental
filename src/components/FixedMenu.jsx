import React from 'react';


class FixedMenu extends React.Component {
    render() {
        return (
            <div id = {this.props.fixed} >
                <div className='fixedMenu'>
                    <div className='headerHome box'>Home</div>
                    <div className='headerOffer box'>Offer</div>
                    <div className='headerLogo box'></div>
                    <div className='headerGallery box'>Gallery</div>
                    <div className='headerContact box'>Contact</div>
                </div>
            </div>
           
        );
    }
}

export default FixedMenu;