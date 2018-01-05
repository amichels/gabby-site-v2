import React from 'react';
import { Link } from 'react-router-dom';

// components
import TitlePaneHeaders from './TitlePaneHeaders';

const TitlePaneHome = () => {
  return (
    <TitlePaneHeaders>
        <h1>Gabby Defonso</h1>
        <h2>Art + Design <Link to="/art">Art</Link></h2>
    </TitlePaneHeaders>
  )
}

export default TitlePaneHome;