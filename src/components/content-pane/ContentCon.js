import styled from 'styled-components';

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
  transition: opacity 1s 1.5s ease-in;

  ${props => setActiveStyles(props.active)};
`

export default ContentCon;