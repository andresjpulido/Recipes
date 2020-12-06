import React, { Component } from 'react';

import { Link } from "react-router-dom";

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
                <h1>Grand Ma's Recipes</h1>

                <div>isLoading : {JSON.stringify(this.state.isLoading)}</div>

                <IfFirebaseAuthed>

                    <div>
                        <FirebaseAuthConsumer>

                            {({ isSignedIn, user, providerId }) => {
                                return (
                                    <h2 >
                                        Welcome {user ?
                                            user.displayName
                                            : null}
                                    </h2>
                                );
                            }}

                        </FirebaseAuthConsumer>

                        <button
                            onClick={async () => {
                                this.setState({ isLoading: true });
                                await firebase
                                    .app()
                                    .auth()
                                    .signOut();
                                this.setState({ isLoading: false });
                            }}
                        >
                            Sign out
                  </button>
                    </div>

                </IfFirebaseAuthed>
                <IfFirebaseUnAuthed>
                    <div>

                        <button
                            onClick={async () => {
                                this.setState({ isLoading: true });
                                await firebase
                                    .app()
                                    .auth()
                                    .signInAnonymously();
                                this.setState({ isLoading: false });
                            }}
                        >
                            Sign in anonymously
                  </button>
                        <button
                            onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase.auth().signInWithPopup(googleAuthProvider);
                            }}
                        >
                            Sign in with Google
                  </button>
                    </div>
                </IfFirebaseUnAuthed>

            </header>

        )
    }
}

export default Header;