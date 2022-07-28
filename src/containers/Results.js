import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import ResultsComponent from '../components/results/ResultsComponent';

function Results(props) {
  let navigate = useNavigate();
  return (
    // <ResultsComponent />
    <ResultsComponent {...props} navigate={navigate} />
  )
}

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Results);
