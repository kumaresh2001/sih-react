import { Store } from "../components/store/Store";
import React, { useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { mapStateToProps } from "../components/store/Reducers";


const GetBackgroundColor = (props) => {

    useEffect(()=>console.log(props))

    if(props?.dark===true)
        return "#000000";
    else
        return "#FFFFFF";
}

export default connect(mapStateToProps) (GetBackgroundColor);