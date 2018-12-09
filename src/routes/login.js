import React, { Component } from 'react';
import { connect } from 'dva';
//import classnames from 'classnames'
import PropTypes from 'prop-types';
import './login.scss'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        uname:'',
        pwd:''
    };
  }

  componentDidMount() {
    console.log('login');
  }
  dis = () => {
    this.props.dispatch({
      type: 'aaa/save',
      payload: {
        aaa: 111,
      }
    });
  }

  eff = () => {
    this.props.dispatch({
      type: 'aaa/effects1',
      payload: {
        aaa: 'fromEffects1',
        effects1: 50,
      }
    });
  }

  render() {
    return (
      <div className="login">
        <div class="loginBox">
            
        </div>
      </div>
    );
  }
}







Login.propTypes = {
    text:PropTypes.string
};


function mapStateToProps({ aaa }) {
  return { aaa };
}

export default connect(mapStateToProps)(Login);
