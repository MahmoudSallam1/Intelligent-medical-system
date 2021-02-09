import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import SessionPage from "./pages/session";

import { auth, createUserProfileDocument } from "./firebase/firebase";





function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await createUserProfileDocument(userAuth);
        user?.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, []);


  console.log(currentUser);

  


  return (
    <>
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage />
            </Route>
            <Route path={ROUTES.SIGN_UP}>
              <SignupPage />
            </Route>

            <Route path={ROUTES.SIGN_IN}>
              <SigninPage />
            </Route>
            <Route path={ROUTES.DASHBOARD}>
              <DashboardPage />
            </Route>
            <Route path={ROUTES.SESSION}>
              <SessionPage />
            </Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
