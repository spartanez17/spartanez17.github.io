import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Menu from './Menu';
import GameBoard from '../containers/GameBoardContainer';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/game" component={GameBoard} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
