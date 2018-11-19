import React, { Component } from 'react';
import Form from './form';

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
       <Form></Form>
        {this.state.apiResponse}
      </div>
    );
  }
}

export default App;
