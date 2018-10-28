import React, { Component } from 'react'
import avatar from '../images/avatar.png'
import { connect } from 'react-redux'
class Dashboard extends Component {
  render() {
    return (
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={avatar} alt={'logo'} className="circle"></img>
          <span className="title">Your Profile</span>
          <div>
          <a>Expand</a>
          </div>
          
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">today</i>
          <span className="title">Scheduled JHMA Session</span>
          <div>
          <a>Expand</a>
          </div>
          <a href="#!" className="secondary-content"><i className="material-icons"></i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">folder</i>
          <span className="title">Your Homework</span>
          <div>
          <a>Expand</a>
          </div>
          <a href="#!" className="secondary-content"><i className="material-icons"></i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">insert_chart</i>
          <span className="title">Your Progress</span>
          <div>
          <a>Expand</a>
          </div>
          <a href="#!" className="secondary-content"><i className="material-icons"></i></a>
        </li>
      </ul>
    );
  }
}
function mapStateToProps(state){
  return { auth: state.auth};
}
export default connect(mapStateToProps)(Dashboard);