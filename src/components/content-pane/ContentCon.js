import styled from 'styled-components';

// configs
import colors from '../../configs/colors';

const setActiveStyles = (active) => {
  if(active) {
    return `
      opacity: 1;
    `
  }
}

const ContentCon = styled.div`
  width: 100%;
  opacity: 0;
  padding: .5rem 1rem;
  box-sizing: border-box;
  transition: opacity 1s 1.5s ease-in;
  text-align: center;
  position: absolute;
  top: 0;
  background-color: ${colors.salmon};

  ${props => setActiveStyles(props.active)};
`

export default ContentCon;
