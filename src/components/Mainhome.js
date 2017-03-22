import React, { Component } from 'react';
import store from '../store';
import * as actions from '../actions/actions';
import { Link } from 'react-router';

class Mainhome extends Component {
    
    render () {
        return (
            <div className="row">
                <section className="boy col-md-6">
                  <Link to="/boy"><center><img src="../images/boy.png" alt="boy" /></center></Link>
                </section>
                <section className="girl  col-md-6">
                    <Link to="/girl"><center><img src="../images/girl.png" alt="girl"/></center></Link>
                </section>
             
            </div>
        )
    }
}

export default Mainhome