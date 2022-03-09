import React, { Component } from 'react';
import axios from 'axios';

export class ApiTest extends Component {
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/").then(res=>{console.log(res)});
    }
    render() {
    return (
      <div>apiTest</div>
    )
  }
}

export default ApiTest