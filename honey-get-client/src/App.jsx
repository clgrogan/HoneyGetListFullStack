import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AllLists from './pages/AllLists' // The list of lists page
import NotFound from './pages/NotFound' // Invalid end point page
import List from './pages/List' // A single list page
import AddList from './pages/AddList' // Page to accept new list entry info
import UpdateList from './pages/UpdateList' // Page for updating an existing list
import AddItem from './pages/AddItem' // Page for adding a  item to a list
import { Provider as AlertProvider } from 'react-alert' // nice alerts for React https://www.npmjs.com/package/react-alert
import AlertTemplate from 'react-alert-template-basic' // basic/'default' template for react-alert
// import NavBar from './components/NavBarAllLists'

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
