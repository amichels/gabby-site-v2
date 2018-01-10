import styled from 'styled-components';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
    `
  }
}

const ContentNav = styled.nav`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 3rem;
  opacity: 0;
  transition: opacity 1s ease-in;

  ${props => setShow(props.show)};
`

export default ContentNav;