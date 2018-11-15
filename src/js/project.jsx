import React from 'react';
import ReactDOM from 'react-dom';
import "../sass/style.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './components/Header.jsx';
import Social from './components/Social.jsx';
import Offer from './components/Offer.jsx';
import Gallery from './components/Gallery.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
// import Sticky from './components/Sticky.jsx';
import FixedMenu from './components/FixedMenu.jsx';




class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fixed: 'fixedMenuWrapperOff',
            
        }
    }
componentDidMount(){
    
    window.addEventListener('scroll', (ev)=>{
        let y = window.scrollY;
        // let stickyParent = document.getElementById('stickyParent');
        let fixedMenuWrapper = document.getElementById('fixedMenuWrapper');
        // console.log(fixedMenuWrapper);
        
        if (y >= 150){
            this.setState({
                fixed: 'fixedMenuWrapperOn'
            })
        }
        else {
            this.setState({
                fixed: 'fixedMenuWrapperOff'
            })
        }
        console.log(y);
    })
}

    render(){
    
        return(
            <div className="body">
                <Header stickyName={this.state.sticky}/>
                {/* <Sticky stickyName={this.state.sticky} /> */}
                <FixedMenu fixed={this.state.fixed}/>
                <Social/>
                <Offer/>
                <Gallery/>
                <Form/>
                <Footer/>
            </div>
            
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


