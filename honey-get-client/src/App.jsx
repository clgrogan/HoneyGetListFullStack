import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AllLists from './pages/AllLists'
import NotFound from './pages/NotFound'
import TheList from './pages/TheList'
import AddList from './pages/AddList'
import NavBar from './pages/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllLists}></Route>
        <Route exact path="/TheList/:ListId" component={TheList}></Route>
        <Route exact path="/AddList" component={AddList}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
