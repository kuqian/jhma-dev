import React, {Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from './Header'
import Mycalendar from './Mycalendar'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../App.css'

const Landing = () => <h2>Landing</h2>


class App extends Component{
    //why not call componentWillMount?
    //prefered location for making initial ajax call
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route exact={true} path="/" component = {Landing}/>
                        <Route exact={true} path="/surveys" component = {Dashboard}/>
                        <Route exact={true} path="/surveys" component = {Mycalendar}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);

