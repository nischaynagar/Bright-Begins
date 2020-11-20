import React, { useState, useContext, } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import useAuthListener from './use-auth-listener';
import { FirebaseContext } from './firebase';
import Home from './home';
import Signup from './Signup';
import * as ROUTES from './routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';


export default function App() {

  const { user } = useAuthListener();


  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_UP} exact>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.HOME} exact>
          <Home />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

