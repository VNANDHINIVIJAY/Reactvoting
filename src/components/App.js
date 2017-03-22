import React, {Component} from 'react';
import store from '../store';
import * as actions from '../actions/actions';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Mainhome from './Mainhome';
import Boyleader from './Boyleader';
import Girlleader from './Girlleader';



class App extends Component {
   

    render() {
        console.log(this.props.location.pathname);

        if (this.props.location.pathname === "/") {
            return <Mainhome/>
        }
         else if(this.props.location.pathname === "/boy")
         { < Boyleader />
         }
         else{
             <Girlleader/>
         }

    return (
        <div>
            {this.props.children != null? React.cloneElement(this.props.children, this.props): null}
        </div>
    )
}
}

function mapStateToProps(state) 
{
return {counting: state.incrementReducer.counting, 
        counting1: state.incrementReducer.counting1,
        counting2: state.incrementReducer.counting2,
        counting3: state.incrementReducer.counting3,
        counting4: state.incrementReducer.counting4,
        counting5: state.incrementReducer.counting5,
        clickflag: state.incrementReducer.clickflag,
        clickflag1: state.incrementReducer.clickflag1,
        resul:state.incrementReducer.resul
};
}
function mapDispatchToProps(dispatch) 
{
return {
    actions: bindActionCreators(actions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App)