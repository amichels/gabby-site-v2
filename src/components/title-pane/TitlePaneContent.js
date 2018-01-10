import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import TitlePaneHeaders from './TitlePaneHeaders';
import TitleContentHeader from './TitleContentHeader';
import TitleContentBack from './TitleContentBack';

// Icons
import BackArrow from '../../images/icons/BackArrow';

// Configs
import colors from '../../configs/colors';
import paths from '../../configs/paths';

const TitlePaneContent = (props) => {
  return (
    <TitlePaneHeaders
        show={props.show}
    >
        <TitleContentHeader>{props.title}</TitleContentHeader>
          <TitleContentBack
            show={props.showBack}
          >
            <Link to={paths.home}>
              <BackArrow
                fill={colors.purple}
              />
            </Link>
          </TitleContentBack>
    </TitlePaneHeaders>
  )
}

TitlePaneContent.propTypes = {
  show: PropTypes.bool.isRequired,
  showBack: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default TitlePaneContent;