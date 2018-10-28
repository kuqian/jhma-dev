//import materializeCss from 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reducers from './reducers'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store = {store}><App /></Provider>, 
    document.querySelector('#root')
);

console.log('stripe key is: ', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log('Enviroment is: ', process.env.NODE_ENV);
