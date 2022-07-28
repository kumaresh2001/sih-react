import React from 'react';
import { Store } from './Store';
import { increment } from './Actions';
import {useState} from 'react';
import {useSelector} from 'react-redux'


function SampleStore(props) {
    const value = useSelector(state=>state.value);
    return (
        <div>
            <p>
                {
                    value
                }
            </p>
        </div>
    );
}

export default SampleStore;