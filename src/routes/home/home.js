import React, { Component } from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
//import classnames from 'classnames'
import PropTypes from 'prop-types';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      //console.log(this.props)
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
        home页面
        <ul>
            <Link to="/home/a/123"><li>A</li></Link>
            <Link to="/home/b/456"><li>B</li></Link>
        </ul>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}







Home.propTypes = {
    text:PropTypes.string
};


function mapStateToProps({ aaa }) {
  return { aaa };
}

export default connect(mapStateToProps)(Home);
