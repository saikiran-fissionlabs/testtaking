import React, { Component } from "react";
import { connect } from "react-redux";
import LoginComponent from '../components/login/LoginComponent';

export class Login extends Component {
  render() {
   return (
    <LoginComponent />
   )
  }
}

export const mapStateToProps = store => {
   return {
     count: store.count
   };
 };
 
export default connect(mapStateToProps, null)(Login);
 