import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import HomeComponent from '../components/home/HomeComponent';

function Home (props) {
  // render() {
    let navigate = useNavigate();
    return (
    <HomeComponent {...props} navigate={navigate} />
   )
  // }
}

export const mapStateToProps = store => {
   return {
     count: store.count
   };
 };
 
export default connect(mapStateToProps, null)(Home);
 