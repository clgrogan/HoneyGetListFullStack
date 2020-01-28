import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AllLists from './pages/AllLists'
import NotFound from './pages/NotFound'
import List from './pages/List'
import AddList from './pages/AddList'
import UpdateList from './pages/UpdateList'
import AddItem from './pages/AddItem'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
}

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={AllLists}></Route>
          <Route exact path="/List/:ListId" component={List}></Route>
          <Route exact path="/AddList" component={AddList}></Route>
          <Route
            exact
            path="/UpdateList/:ListId"
            component={UpdateList}
          ></Route>
          <Route exact path="/AddItem/:ListId" component={AddItem}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </AlertProvider>
  )
}

export default App
