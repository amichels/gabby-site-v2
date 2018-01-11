import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentNavItem = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`

export default ContentNavItem;