import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";


class App extends React.Component {

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert("kkkkk");
    // },

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
       // this.onChangeEmail = this.onChangeEmail.bind(this);
       // this.onChangePassword=this.onChangePassword.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    onChangeEmail=(e)=>{
       // alert(e.target.value);
        console.log("here");
        this.setState({email: e.target.value});

    }

    onChangePassword=(e)=>{
        console.log("there");
        this.setState({password:e.target.value});
    }


    handleClick= (e) => {
       e.preventDefault();
       alert("here");
       alert(this.state.email);
      
    }

    render() {
        return (<Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.onChangeEmail} placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.onChangePassword} placeholder="Password"/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClick}>
                Submit
            </Button>
        </Form>);
    }
}

export default App



