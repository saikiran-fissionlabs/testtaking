import React from "react";
import { connect } from "react-redux";
import RegisterComponent from '../components/register/RegisterComponent';
import { useNavigate } from 'react-router-dom';

// export class Register extends Component {
  function Register(props) {
  // render() {
    let navigate = useNavigate();
   return (
    <RegisterComponent {...props} navigate={navigate} />
   )
  // }
}

export const mapStateToProps = store => {
   return {
     count: store.count
   };
 };
 
export default connect(mapStateToProps, null)(Register);
 