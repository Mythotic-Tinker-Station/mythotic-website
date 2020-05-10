import React, { Component, Fragment } from "react";
import { Route, Switch } from 'react-router-dom';

// Import components
import ToolBar from "./components/Navigation/Toolbar/Toolbar";

// Import Containers
import Home from './containers/Home/Home';
import Lexicon from './containers/Lexicon/Lexicon';


class App extends Component {
  render() {
    return (
      <Fragment>
          <ToolBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lexicon' component={Lexicon} />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
