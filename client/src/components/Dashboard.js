import React, { Component } from 'react'
import avatar from '../images/avatar.png'
import { connect } from 'react-redux'
class Dashboard extends Component {
  render() {
    return (
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={avatar} alt={'logo'} className="circle"></img>
          <span className="title">{this.props.auth?'you are in':'no logged in yet'}</span>
          <p>First Line
             Second Line
      </p>
          
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
      </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
      </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
      </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>
    );
  }
}
function mapStateToProps(state){
  return { auth: state.auth};
}
export default connect(mapStateToProps)(Dashboard);