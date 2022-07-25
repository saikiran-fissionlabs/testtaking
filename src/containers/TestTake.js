import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import TestTakeComponent from '../components/testtake/TestTakeComponent';

function TestTake(props) {
  let navigate = useNavigate();
  return (
    <TestTakeComponent {...props} navigate={navigate} />
  )
}

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(TestTake);
