import React from 'react';
import { Link } from 'react-router-dom';

// components
import TitlePaneHeaders from './TitlePaneHeaders';
import TitleHeader from './TitleHeader';
import TitleSubheader from './TitleSubheader';

const TitlePaneHome = () => {
  return (
    <TitlePaneHeaders>
        <TitleHeader>Gabby Defonso</TitleHeader>
        <TitleSubheader>Art + Design <Link to="/art">Art</Link></TitleSubheader>
    </TitlePaneHeaders>
  )
}

export default TitlePaneHome;