import React, {Component} from 'react'
import { connect } from 'react-redux'


class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            //deciding whether user is logged in
            case null:
                return;
            //find out user is not logged in
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>;
            //find out user already logged in
            default:
                return <li><a href='/api/logout'>Log out</a></li>;
        }
    }
    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        JHMA Student System
                    </a>
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