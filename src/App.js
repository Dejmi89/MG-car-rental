import React, { Component } from 'react';
import Form from '../src/components/form';
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div >
        <Header></Header>
       {/* <Form></Form> */}
        {this.state.apiResponse}
      </div>
    );
  }
}

export default App;
