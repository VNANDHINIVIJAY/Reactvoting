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


class Boyleader extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {res: ""};
    }
    result()
    {
        
        let one=this.props.counting;
        let two=this.props.counting1;
        let three=this.props.counting2;
        if(one>two && one>three)
        {
        this.setState( {res:"Member1 wins"});
        }
        else if(two>three)
        {
        this.setState( {res:"Member2 wins"});
        }
        else{
        this.setState( {res:"Member3 wins"});
        }
    }
    back()
    {
       
       if(this.props.location.pathname==="/boy")
       {
         this.props.router.push({pathname: '/'});
       }
    }
    
    render () {
      
        return (
            <div className="col-md-12">
                
                {/*<Mem1 counting={this.props.counting} actions={this.props.actions}/>*/}

                <div className="col-md-4 boy1">
                    <div className="text-center"><img src="../images/boymem.png"/></div>
                    <div className="text-center"><span>Member1</span></div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting}</div>
                </div>

                {/*<Mem2 counting1={this.props.counting1} actions={this.props.actions}/>*/}

                <div className="col-md-4 boy2">
                    <div className="text-center"><img src="../images/boymem.png"/></div>
                    <div className="text-center">Member2</div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo1(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting1}</div>
                </div>

                <div className="col-md-4 boy3">
                    <div className="text-center"><img src="../images/boymem.png"/></div>
                    <div className="text-center">Member3</div>
                    <div className="text-center"><button className="btn btn-primary" onClick={()=>{this.props.actions.incrementDemo2(1)}}>vote</button></div>
                     <div className="text-center">{this.props.counting2}</div>
                </div>

                <div className="text-center"><button className="btn btn-success" onClick={()=>{this.result()}} >Result</button>
                <button className="btn btn-success" onClick={()=>{this.back()}}>Back</button></div>              
               <div className="text-center result">{this.state.res}</div>
            </div>
        )
    }
}


export default Boyleader
 