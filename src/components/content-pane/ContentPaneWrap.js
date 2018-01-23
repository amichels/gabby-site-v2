import PaneWrap from '../global/PaneWrap';

// configs
import colors from '../../configs/colors';

const setActiveStyles = (active) => {
  if(active) {
    return `
      width: 60vw;
      min-height: 100vh;
      height: auto;
      margin-left: auto;
      background-color: ${colors.salmon};
    `
  }
}

const ContentPaneWrap = PaneWrap.extend`
  width: 40vw;
  background-color: white;
  transition: background-color 1s ease-in, width 1s ease-in;

  ${props => setActiveStyles(props.active)};
`

export default ContentPaneWrap;