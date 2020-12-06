import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Row, Col, NavDropdown } from 'react-bootstrap';

import firebase from "firebase/app";
import "firebase/auth";
import {
    FirebaseAuthProvider,
    IfFirebaseUnAuthed,
    IfFirebaseAuthed,
    FirebaseAuthConsumer,
    IfFirebaseAuthedAnd, authState
} from "@react-firebase/auth";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        return (

            <header className="App-header">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Grand Ma's Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Latest</Nav.Link>
                            <Nav.Link href="#pricing">Recommened</Nav.Link>
                            <NavDropdown title="
      Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Desert</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Baking</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vegeterian</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Gluter Free</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            
 
                            <IfFirebaseAuthed>
                            <Nav.Link href="#deets">My profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes" onClick={async () => {
                                        this.setState({ isLoading: true });
                                        await firebase
                                            .app()
                                            .auth()
                                            .signOut();
                                        this.setState({ isLoading: false });
                                    }}>Sign out</Nav.Link>
                            </IfFirebaseAuthed>

                            <IfFirebaseUnAuthed>                            
                                <Nav.Link eventKey={2} href="#memes" onClick={() => {
                                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                            firebase.auth().signInWithPopup(googleAuthProvider);
                                        }}>Sign in with Google</Nav.Link>                                 
                            </IfFirebaseUnAuthed>



                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



                <Row>
                    <Col>
                        <IfFirebaseAuthed>

                            <div>
                                <FirebaseAuthConsumer>

                                    {({ isSignedIn, user, providerId }) => {
                                        return (
                                            <h4 >
                                                Welcome {user ?
                                                    user.displayName
                                                    : null}
                                            </h4>
                                        );
                                    }}

                                </FirebaseAuthConsumer>

                                 
                            </div>

                        </IfFirebaseAuthed>


                    </Col>
                </Row>







            </header>

        )
    }
}

export default Header;