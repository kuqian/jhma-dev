import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payment from './Payment'


class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            //deciding whether user is logged in
            case null:
                return;
            //find out user is not logged in
            case false:
                return <li>
                            <a href='/auth/google' className="waves-effect waves-light btn">
                                Login with Google
                            </a>
                        </li>;
            //find out user already logged in
            default:
                return [
                    <li key='2' className="active abtn" style={{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                    </li>,
                    <li key='3'>
                        <Payment/>
                    </li>,
                    <li key='4'>
                        <a href='/api/logout' className="btn btn-default btn-sm lbtn">
                            Log out
                        </a>
                    </li>
                ];
        }
    }
    render(){
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth?'/surveys':'/'}
                        className="left brand-logo"
                    >
                        {this.props.auth?"Hi, " + this.props.auth.displayName:'JHMA App'}
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps(state){
    return { auth: state.auth};
}
export default connect(mapStateToProps)(Header);