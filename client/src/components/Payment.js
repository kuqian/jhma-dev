import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Payment extends Component{
    render(){
        //debugger;
        return(
            <StripeCheckout
            name = "JHMA"
            description = "$50 dollars per course"
            amount = {500}
            //this is a callback function like onToken
            token = {(token)=>this.props.handleToken(token)}
            stripeKey = {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
            <button className='btn'>
                Add Credits
            </button>
            </StripeCheckout>
        );
    }
}
export default connect(null, actions)(Payment);