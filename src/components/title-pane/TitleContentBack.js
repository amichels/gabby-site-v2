import styled from 'styled-components';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
      transform: rotate(0);
    `
  }
}

const TitleContentBack = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  transform: rotate(90deg);
  transition: opacity 1s 1s ease-in, transform .5s 2s ease-out;

  ${props => setShow(props.show)};
`

export default TitleContentBack;