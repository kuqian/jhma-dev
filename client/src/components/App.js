import React, {Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from './Header'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../App.css'

//const Dashboard = () => <h2>Dashboard for you</h2>
const Landing = () => <h2>Landing</h2>
//const Surveys = () => <h2>new</h2>;


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
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);

