import styled from 'styled-components';
import PaneWrap from '../global/PaneWrap';

// configs
import paths from '../../configs/paths.js';

const setRouteStyles = (route) => {
  if(route !== paths.home) {
    return `
      width: 25vw;
      &:before {
        opacity: 1;
      }
    `
  }
}

const TitlePaneWrap = PaneWrap.extend`
  align-items: center;
  background: linear-gradient(to bottom, rgba(242,255,0,1) 1%, rgba(255,89,255,1) 100%);
  &:before {
    content: ' ';
    display: block;
    background-color: white;
    opacity: 0;
    transition: opacity 1s ease-in;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  ${props =>
    setRouteStyles(props.route)
  };
`

export default TitlePaneWrap;