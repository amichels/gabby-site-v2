import React from 'react';

// Components
import ContentImages from '../components/content-pane/ContentImages';

// Icons
import CameraIcon from '../images/icons/Camera.js';
import HandIcon from '../images/icons/Hand.js';
import MouseIcon from '../images/icons/Mouse.js';
import PencilIcon from '../images/icons/Pencil.js';

// Images
import artImages from './images/art.js'

// Configs
import paths from './paths';

const content = {
    art: {
        path: paths.art,
        title: 'Art',
        icon: <PencilIcon />,
        content: <ContentImages images={artImages}/>
    },
    photo: {
        path: paths.photo,
        title: 'Product Photography',
        icon: <CameraIcon />,
        content: <ContentImages images={artImages}/>
    },
    design: {
        path: paths.design,
        title: 'Design',
        icon: <MouseIcon />,
        content: <ContentImages images={artImages}/>
    },
    about: {
        path: paths.about,
        title: 'About',
        icon: <HandIcon />,
        content: <ContentImages images={artImages}/>
    }
}

export default content;