import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { injectGlobal } from 'styled-components';

// components
import GlobalStyles from './components/global/GlobalStyles';
import TitlePane from './components/title-pane/TitlePane.js';
import Container from './components/global/Container.js';

const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path='*' component={TitlePane} />
      </Container>
    </Router>
  )
}

export default App;