
// @flow strict

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Article from './in Offer/Article.jsx' ;


const weddingText = <p>Morbi finibus nibh eu sapien sagittis faucibus. Nulla imperdiet tellus 
sit amet est dapibus consectetur. Maecenas vitae venenatis sem. Nullam quis facilisis lacus, vitae congue velit. 
Nulla ornare sem sed mollis accumsan. Cras eget ligula nisi. Nulla facilisi. Etiam odio dolor, 
rutrum ac nisl non, commodo fringilla eros. Ut varius blandit nisl in placerat. Vivamus et dolor finibus, 
imperdiet dolor sit amet, maximus sapien. Curabitur sed mauris ac ipsum accumsan dictum. Praesent 
ullamcorper tincidunt lectus, quis fermentum velit uctus vitae. </p>;

const epicParties = <p>Aliquam tincidunt est sit amet arcu accumsan mattis. In mollis vestibulum elit id tempor. 
Mauris posuere sapien vel ante tempus, a pharetra neque finibus. Nam ut orci quis eros dignissim molestie.
 Integer a libero efficitur, gravida ipsum eu, dictum nunc. In lacus enim, elementum nec efficitur et, ullamcorper id ex.
  Curabitur eget nisi a elit sodales dignissim vel nec diam. Nunc id mi eros. 
  Integer eu mauris ac ipsum fermentum rutrum et vitae justo. .</p>;

const justForFun = <p>Proin sit amet ipsum vel sem pharetra fermentum nec a massa.
Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Fusce non cursus massa. Donec pulvinar erat quis convallis venenatis. 
Morbi tortor tellus, consequat vitae finibus et, suscipit in tortor. 
Proin vehicula, lectus a varius elementum, est velit condimentum neque, in vulputate odio est at metus. 
In consequat volutpat enim, id elementum sem posuere vitae.</p>;


class Offer extends React.Component {
    render() {
        return (
           <div>
               <h3>The offer
                    <hr/>
               </h3>
            
               <div className="offerWrap">
                    <div className="offerBox steeringWheel"></div>
                    <div className="offerBox">
                        <Article heading='Weddings' text={weddingText}/>
                    </div>
                    <div className="offerBox">
                        <Article heading='Epic parties' text={epicParties}/>
                    </div>
                    <div className="offerBox gearbox"></div>
                    <div className="offerBox hood"></div>
                    <div className="offerBox">
                        <Article heading='Just for fun' text={justForFun}/>                        
                    </div>
               </div>
           </div>
            
        
        );
    }
}

export default Offer;

