import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import TodoList from './containers/todolist'
import Login from './containers/login'
import Join from './containers/join'
import Recipe from './containers/recipe'
import NotFoundPage from './containers/notFoundPage';
import NewRecipe from './containers/new_recipe';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

library.add(fab, fas, far)

function App() {

  let _pending = false;

  var firebaseConfig = {
    apiKey: "AIzaSyB7B0vMnXvIW8s1i1fwmhyHhA5aQk6blfA",
    authDomain: "website-e1bf5.firebaseapp.com",
    databaseURL: "https://website-e1bf5.firebaseio.com",
    projectId: "website-e1bf5",
    storageBucket: "website-e1bf5.appspot.com",
    messagingSenderId: "859353339005",
    appId: "1:859353339005:web:6621a3fe6704a4c5d6cd14",
    measurementId: "G-MB545Z9GLD"
  };

  return (

    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
       
        <Container fluid>

          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route
                  path="/"
                  exact
                  component={TodoList}
                />
                <Route
                  path="/login"
                  exact
                  component={Login}
                />
                <Route
                  path="/join"
                  exact
                  component={Join}
                />
                <Route
                  path="/recipe"
                  exact
                  component={Recipe}
                />
                <Route
                  path="/new-recipe"
                  exact
                  component={NewRecipe}
                />
                <Route
                  path="/404"
                  component={NotFoundPage} />

                <Redirect to="/404" />

              </Switch>

              {
                _pending &&
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }

            </div>
          </BrowserRouter>
          <Footer />
        </Container>

   
      </FirebaseAuthProvider>
    </FirebaseDatabaseProvider>
  );
}

export default App;
