import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddStudent from './Add';
import Detail from './Detail';

import List from './Lists';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={List} />
            <Route exact path='/AddStudent' component={AddStudent} />
            <Route exact path='/Detail/:rollNo' component={Detail} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
