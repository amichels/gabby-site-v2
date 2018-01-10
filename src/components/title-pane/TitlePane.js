import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// components
import TitlePaneWrap from './TitlePaneWrap';
import TitlePaneHome from './TitlePaneHome';
import TitlePaneArt from './TitlePaneArt';

// Utils
import paths from '../../configs/paths';

class TitlePane extends React.Component {
  constructor(props){
    super(props);

    this.props.history.listen((location, action) => {
      const url = location.pathname;
      this.checkRouteAnimations(url);
    });

    this.state = {
      showHeaders: false,
      paneActive: true,
    };
  }

  checkRouteAnimations(url) {
    const home = url === paths.home;

    this.homeAnimations(home);
  }

  homeAnimations(home) {
    this.activatePane(home);
    this.fadeHeaders(home);
  }

  activatePane(active) {
    this.setState({paneActive: active});
  }

  fadeHeaders(show) {
    setTimeout(() => {
      this.setState({showHeaders: show});
    }, 1000);
  }

  render() {
    return (
      <TitlePaneWrap
        active={this.state.paneActive}
      >
        <Switch>
          <Route exact path={paths.home}
            render={() =>
              <TitlePaneHome
                showHeaders={this.state.showHeaders}
              />
            }
          />
          <Route exact path={paths.art} component={TitlePaneArt} />
        </Switch>
      </TitlePaneWrap>
    )
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    this.checkRouteAnimations(url);
  }
}

export default withRouter(TitlePane);