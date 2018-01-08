import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import TitlePaneHeaders from './TitlePaneHeaders';
import TitleHeader from './TitleHeader';
import TitleSubheader from './TitleSubheader';

const TitlePaneHome = (props) => {
    return (
        <TitlePaneHeaders
            show={props.showHeaders}
        >
            <TitleHeader>Gabby Defonso</TitleHeader>
            <TitleSubheader>Art + Design</TitleSubheader>
        </TitlePaneHeaders>
    )
}

TitlePaneHome.propTypes = {
    showHeaders: PropTypes.bool.isRequired
  }
  

export default TitlePaneHome;