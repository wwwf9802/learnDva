import React, { Component } from 'react';
import { connect } from 'dva';
//import classnames from 'classnames'
import PropTypes from 'prop-types';


class HomeB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
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
      <div className="home">
       home子组件B
       <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}







HomeB.propTypes = {
    text:PropTypes.string
};


function mapStateToProps({ aaa }) {
  return { aaa };
}

export default connect(mapStateToProps)(HomeB);
