import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterComponent from "./component/registerComponent";
import LoginComponent from "./component/loginComponent";
import HomeComponent from "./component/homeComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {


    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Registration</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Registration />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2><HomeComponent /></h2>
        </div>
    );
}

function Login() {

            return (
            <div>
                <h2><LoginComponent /></h2>
            </div>
            )
}

function Registration() {
    return (
        <div>
            <RegisterComponent />
        </div>
    );
}

export default App;