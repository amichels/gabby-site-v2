import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

// components
import ContentPaneWrap from './ContentPaneWrap';
import ContentNav from './ContentNav';
import ContentNavItem from './ContentNavItem';

// Utils
import paths from '../../configs/paths';

class ContentPane extends React.Component {
  constructor(props){
    super(props);

    this.props.history.listen((location, action) => {
      const url = location.pathname;
    });

    this.state = {
    };
  }

  render() {
    return (
      <ContentPaneWrap
        active={this.state.paneActive}
      >
        <Switch>
          <Route exact path={paths.home}
            render={() =>
              <ContentNav
                showHeaders={this.state.showHeaders}
              >
                <ContentNavItem to={paths.art}> Art</ContentNavItem>
                <ContentNavItem to={paths.photo}>Photo</ContentNavItem>
                <ContentNavItem to={paths.design}>Design</ContentNavItem>
                <ContentNavItem to={paths.about}>About</ContentNavItem>
              </ContentNav>
            }
          />
        </Switch>
      </ContentPaneWrap>
    )
  }

  componentDidMount() {
  }
}

export default withRouter(ContentPane);