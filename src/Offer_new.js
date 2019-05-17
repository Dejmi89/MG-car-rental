import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import img from './resources/images/CabrioLsniace.jpg'

class Offer_new extends Component {
    render() {
        return (
            <div style={{
                border: '2px solid black',
                width: '100%',
                height: '150vh',
                display: 'grid',
                gridTemplateColumns: '16.5% 16.5% 16.5% 16.5% 16.5% 16.5%',
                gridTemplateRows: '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%'
            }}>
                <div style={{
                    border: '2px solid black',
                    display: 'grid',
                    gridColumn: '2/6',
                    gridRow: '1/10'
                }}></div>
                <div style={{
                    border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '1/2'
                }}></div>
                <div style={{
                    border: '2px solid black',
                    display: 'grid',
                    gridColumn: '3/5',
                    gridRow: '2/10'
                }}></div>
                <div style={{
                    border: '2px solid black',
                    display: 'grid',
                    gridColumn: '4/2',
                    gridRow: '3/8',
                    transform: 'rotate(96deg) translate(-140px, 435px)',
                    // backgroundImage:`url(${img})`
                }}></div>
                <div style={{
                    border: '2px solid black',
                    display: 'grid',
                    gridColumn: '5/7',
                    gridRow: '4/7',
                    transform: 'rotate(135deg) translate(316px, -190px)'

                }}></div>
            </div>
        );
    }
}

export default Offer_new;