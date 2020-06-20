import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateZone = ({ children, user }) => {
  const role = user.role

  return role === 'admin' ?  children : (
    <Redirect to={{pathname: '/',}} />
  );
};
const mapStateToProps = state => ({ user: state.user.user });
export default connect(mapStateToProps)(PrivateZone);
