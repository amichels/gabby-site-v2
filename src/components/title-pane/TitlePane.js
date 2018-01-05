import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import TitlePaneWrap from './TitlePaneWrap';
import TitlePaneHome from './TitlePaneHome';
import TitlePaneArt from './TitlePaneArt';

// Utils
import paths from '../../configs/paths';

const transEnd = (e) => {
  console.log(e);
}

const TitlePane = (props) => {
  return (
    <TitlePaneWrap
      onTransitionEnd={(e) => transEnd(e)}
      route={props.match.url}
    >
      <Switch>
        <Route exact path={paths.home} component={TitlePaneHome} />
        <Route exact path={paths.art} component={TitlePaneArt} />
      </Switch>
    </TitlePaneWrap>
  )
}

export default TitlePane;