import React, { Component } from 'react'
import  {Router} from 'react-router';
import store from '../store';
import { Link } from 'react-router';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Mem1 from './Mem1';
// import Mem2 from './Mem2';
import Mainhome from './Mainhome';
import "../css/style.css"


class Girlleader extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {res: ""};
    }
    result()
    {
        
        let four=this.props.counting3;
        let five=this.props.counting4;
        let six=this.props.counting5;
        if(four>five && four>six)
        {
        this.setState( {res:"Member1 wins"});
        }
        else if(five>six)
        {
        this.setState( {res:"Member2 wins"});
        }
        else{
        this.setState( {res:"Member3 wins"});
        }
    }
    back()
    {
       
       if(this.props.location.pathname==="/girl")
       {
         this.props.router.push({pathname: '/'});
       }
    }
    
    render () {
      
        return (
            <div className="col-md-12">
                
                {/*<Mem1 counting={this.props.counting} actions={this.props.actions}/>*/}

                <div className="col-md-4 girl1">
                    <div className="text-center"><img src="../images/girlmem.png"/></div>
                    <div className="text-center"><span>Member1</span></div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo3(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting3}</div>
                </div>

                {/*<Mem2 counting1={this.props.counting1} actions={this.props.actions}/>*/}

                <div className="col-md-4 girl2">
                    <div className="text-center"><img src="../images/girlmem.png"/></div>
                    <div className="text-center">Member2</div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo4(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting4}</div>
                </div>

                <div className="col-md-4 girl3">
                    <div className="text-center"><img src="../images/girlmem.png"/></div>
                    <div className="text-center">Member3</div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo5(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting5}</div>
                </div>

                <div className="text-center"><button className="btn btn-success" onClick={()=>{this.result()}} >Result</button>
                <button className="btn btn-success" onClick={()=>{this.back()}}>Back</button></div>              
               <div className="text-center result">{this.state.res}</div>
            </div>
        )
    }
}


export default Girlleader
 