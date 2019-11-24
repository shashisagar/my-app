import React,{Component} from 'react';
import {HashRouter,Route,NavLink} from 'react-router-dom';
import SignUP from './signup';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
              <h1>Simple SPA</h1>
              <ul className="header">
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                {/* <li><NavLink to="/login">Login</NavLink></li> */}
                <li><NavLink to="/signup">Signup</NavLink></li>
              </ul>
              <div className="content">
                {/* <Route path="/" component={Home}/> */}
                {/* <Route path="/login" component={Login}/> */}
                <Route path="/signup" component={SignUP}/>
              </div>
            </div>
          </HashRouter>
        )
    }
}

export default Main;