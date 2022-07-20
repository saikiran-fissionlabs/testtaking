import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterComponent from '../components/register/RegisterComponent';

export class Register extends Component {
  render() {
   return (
    <RegisterComponent />
   )
  }
}

export const mapStateToProps = store => {
   return {
     count: store.count
   };
 };
 
export default connect(mapStateToProps, null)(Register);
 