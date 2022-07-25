import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import InstrucationsComponent from '../components/instrucations/InstrucationsComponent';

function Instrucations(props) {
  let navigate = useNavigate();
  return (
    <InstrucationsComponent {...props} navigate={navigate} />
  )
}

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Instrucations);
