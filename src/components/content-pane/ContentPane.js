import React from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

// components
import ContentPaneWrap from './ContentPaneWrap';
import ContentNav from './ContentNav';
import ContentNavItem from './ContentNavItem';

// Configs
import paths from '../../configs/paths';
import content from '../../configs/content';

class ContentPane extends React.Component {
  constructor(props){
    super(props);

    this.props.history.listen((location, action) => {
      const url = location.pathname;
      this.checkRouteAnimations(url);
    });

    this.state = {
      showNav: false,
      paneActive: false,
    };
  }

  checkRouteAnimations(url) {
    const content = url !== paths.home;
    this.contentAnimations(content);
  }

  contentAnimations(content) {
    this.activatePane(content);
    this.showNav(!content);
  }

  activatePane(active) {
    this.setState({paneActive: active});
  }

  showNav(show) {
    setTimeout(() => {
      this.setState({showNav: show});
    }, 1500);
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
                show={this.state.showNav}
              >
                {Object.keys(content).map((key) => {
                    return (
                      <ContentNavItem key={key} to={content[key].path}>
                        {content[key].icon}
                      </ContentNavItem>  
                    )
                })}
              </ContentNav>
            }
          />
        </Switch>
      </ContentPaneWrap>
    )
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    this.checkRouteAnimations(url);
  }
}

export default withRouter(ContentPane);