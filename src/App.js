import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Login from './Components/Login';
import Search from './Components/Search';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <>
 <BrowserRouter >
 <Switch>
 <Route exact path="/" component={Login} />

 <ProtectedRoute path="/search" component={Search} />
 </Switch>
 </BrowserRouter>
    </>
  );
}

export default App;
