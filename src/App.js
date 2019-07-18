import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Test from './Test'
import Sample from './Sample'


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/Test" component={Test} />
          <Route path="/Sample" component={Sample} />
        </div>
      </Router>

    )
  }
}

export default App
