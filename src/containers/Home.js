import React, { Component } from "react";
import { connect } from "react-redux";
import HomeComponent from '../components/home/HomeComponent';

export class Home extends Component {
  render() {
   return (
    <HomeComponent />
   )
  }
}

export const mapStateToProps = store => {
   return {
     count: store.count
   };
 };
 
export default connect(mapStateToProps, null)(Home);
 