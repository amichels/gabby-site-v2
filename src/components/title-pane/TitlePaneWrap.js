import styled from 'styled-components';
import PaneWrap from '../global/PaneWrap';

// configs
import paths from '../../configs/paths.js';

const setRouteStyles = (route) => {
  if(route === paths.art) {
    return `width: 25vw;`
  }
}

const TitlePaneWrap = PaneWrap.extend`
  align-items: center;
  background: linear-gradient(to bottom, #f2ff00 25%,#ff59ff 100%);
  ${props =>
    setRouteStyles(props.route)
  };
`

export default TitlePaneWrap;