import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Explore from './Pages/Explore/Explore';
import About from './Pages/About/About';
import QA from './Pages/QA/QA';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute'
import Login from './Pages/Login/Login';
import AddCar from './Pages/AddCar/AddCar';
import Subscribe from './Pages/Subscribe/Subscribe';
import { useState } from 'react';

import { createContext, useEffect } from 'react';
export const UserContext = createContext();


function App() {

    const [loggedInUser, setLoggedInUser] = useState({});
   
  return (
    <div className="App">
    <UserContext.Provider value = {{value :[loggedInUser, setLoggedInUser]}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/explore">
            <Explore></Explore>
          </PrivateRoute>
          
          <Route path="/qa">
            <QA></QA>
          </Route>
          <PrivateRoute exact path="/addCar">
            <AddCar></AddCar>
          </PrivateRoute>
          <PrivateRoute exact path="/subscribe">
            <Subscribe></Subscribe>
          </PrivateRoute>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
