import React, { Component } from 'react';
import { Store } from './Store';
import { increment } from './Actions';
import SampleStore from './SampleStore';
import {connect} from 'react-redux';


class SampleStore2 extends Component {

    constructor(props){
        super(props);
        this.state ={
            value:null,
        }
    }

    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <p>
                    {
                        JSON.stringify(this.props.value)
                    }
                </p>
                <button onClick={()=>this.props.dispatch(increment())}>
                    Click here
                </button>

                <hr />
                <SampleStore />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value:state.value
    }
  }

export default connect(mapStateToProps)(SampleStore2);