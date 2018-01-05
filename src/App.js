import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

// components
import GlobalStyles from './components/global/GlobalStyles';

// Views
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;