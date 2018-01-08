import styled from 'styled-components';

// configs
import paths from '../../configs/paths.js';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
    `
  }
}

const TitlePaneHeaders = styled.div`
  text-align: center;
  width: 100%;
  z-index: 200;
  opacity: 0;
  transition: opacity 1s ease-in;

  ${props =>
    setShow(props.show)
  };
`

export default TitlePaneHeaders;