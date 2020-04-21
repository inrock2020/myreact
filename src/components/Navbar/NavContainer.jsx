import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
    // debugger
    return{
        state: state.Sidebar,
    }
}


const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;