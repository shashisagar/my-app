import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";


class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"",
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
    onChangeName=(e)=>{
        console.log("there");
        this.setState({name:e.target.value});
    }
    handleClick= (e) => {
       e.preventDefault();
       alert(this.state.email);
       alert(this.state.password);
       alert(this.state.name);
      
    }

    render() {
        return (<Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" onChange={this.onChangeName} placeholder="Enter name"/>
            </Form.Group>

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
                Signup
            </Button>
        </Form>);
    }
}

export default Signup



