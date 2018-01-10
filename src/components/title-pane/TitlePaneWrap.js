import PaneWrap from '../global/PaneWrap';

// Configs
import colors from '../../configs/colors';

const setActiveStyles = (active) => {
  if(!active) {
    return `
      width: 40vw;
      &:before {
        opacity: 1;
      }
    `
  }
}

const TitlePaneWrap = PaneWrap.extend`
  width: 60vw;
  background: linear-gradient(to bottom, ${colors.pink} 1%, ${colors.yellow} 100%);
  transition: width: 1s ease-in;
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

  ${props => setActiveStyles(props.active)};
`

export default TitlePaneWrap;