
import './App.css';

import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Users from './users/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const login = useCallback(
    () => {
      setIsLoggedIn(true)
    },
    [],
  )
  const logout = useCallback(
    () => {
      setIsLoggedIn(false)
    },
    [],
  )
  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/:uid/places" exact>
          <UserPlaces></UserPlaces>
        </Route>

        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>

        <Route path="/places/:placeId" >
          <UpdatePlace></UpdatePlace>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    )
  }
  else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/:uid/places" exact>
          <UserPlaces></UserPlaces>
        </Route>

        <Route path="/auth" exact>
          <Auth></Auth>
        </Route>
        <Redirect to="/auth"></Redirect>
      </Switch>
    )
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation></MainNavigation>
        {routes}
      </Router>
    </AuthContext.Provider>
  )
}

export default App

