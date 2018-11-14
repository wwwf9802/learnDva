import React, { Component } from 'react';
import { connect } from 'dva';
import classnames from 'classnames'
import '../assets/sass/yhn.scss'
import PropTypes from 'prop-types';


class Clock extends Component {

  static childContextTypes = {
    wenzi: PropTypes.string
  }

  getChildContext = () => {
    return {
      wenzi: this.state.b
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "11111",
      a: 1,
      b:'ContextFromClock',
      time: new Date(),
      redFlag: true,
    };
  }

  componentDidMount() {
    console.log(123);
    //console.log(process)
    console.log(Promise);
    console.log(process.env)
    //console.log(this.props);
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

  showProps() {
    console.log(Object.values(this.props.aaa));

    let values = Object.values(this.props.aaa).map(item => <div key={item}>{item}</div>)
    return (<div>{values}</div>)
  }

  red() {
    return 'red'
  }

  render() {
    return (
      <div className="App">
        <h1 className={classnames({ 'red': this.state.redFlag }, 'fs30')}>首页(父组件)</h1>
        <h2>{this.showProps()}</h2>
        <button onClick={this.dis}>dispatch</button>
        <button onClick={this.eff}>effects</button>
        <Son></Son>
      </div>
    );
  }
}



class Son extends Component {


  componentDidMount() {
  }

  render() {
    return (
      <div className="son">
        <div>子组件</div>
        <Sun></Sun>
      </div>
    );
  }
}

class Sun extends Component {
  static contextTypes = {
    wenzi: PropTypes.string
  }

  constructor(props){
    super(props)
    this.state={
      num:10
    }
  }

  componentDidMount() {
    console.log(this)
  }


  render() {

    return (
      <div className="sun">
        <div>孙组件</div>
        <div>
          <input  style={{width:"50px"}} type="text" onChange={(e)=>{}} value={this.state.num}/>
          <p>{this.context.wenzi}</p>
        </div>
      </div>
    );
  }
}



Clock.propTypes = {
};


function mapStateToProps({ aaa }) {
  return { aaa };
}

export default connect(mapStateToProps)(Clock);
