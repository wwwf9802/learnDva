import React,{Component} from 'react';
import { connect } from 'dva';
import classnames from 'classnames'
import '../assets/sass/yhn.scss'



class BBB extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "11111",
        a:1,
        b:2,
        time:new Date(),
        redFlag:true,
      };
    }

    componentDidMount(){
      console.log(this.props);
    }
   dis=()=>{
      this.props.dispatch({
        type: 'aaa/save',
        payload: {
          aaa: 111,
        }
      });
    }

   eff=()=>{
      this.props.dispatch({
        type: 'aaa/effects1',
        payload: {
          aaa: 'fromEffects1',
          effects1:50,
        }
      });
    }

    showProps(){
      console.log(Object.values(this.props.aaa));

      let values=Object.values(this.props.aaa).map(item=><div key={item}>{item}</div>)
      return (<div>{values}</div>)
    }

    red(){
      return 'red'
    }

    render() {
      return (
        <div className="App">
          <h1 className={classnames({'red':this.state.redFlag},'fs30')}>BBB</h1>
          <h2>{this.showProps()}</h2>
          <button onClick={this.dis}>dispatch</button>
          <button onClick={this.eff}>effects</button>
        </div>
      );
    }
  }



BBB.propTypes = {
};


function mapStateToProps({aaa,bbb}) {
  return {aaa,bbb};
}


export default connect(mapStateToProps)(BBB);
