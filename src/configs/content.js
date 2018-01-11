import React from 'react';

// Icons
import CameraIcon from '../images/icons/Camera.js';
import HandIcon from '../images/icons/Hand.js';
import MouseIcon from '../images/icons/Mouse.js';
import PencilIcon from '../images/icons/Pencil.js';


// Configs
import paths from './paths';

const content = {
    art: {
        path: paths.art,
        title: 'Art',
        icon: <PencilIcon />
    },
    photo: {
        path: paths.photo,
        title: 'Product Photography',
        icon: <CameraIcon />
    },
    design: {
        path: paths.design,
        title: 'Design',
        icon: <MouseIcon />
    },
    about: {
        path: paths.about,
        title: 'About',
        icon: <HandIcon />
    }
}

export default content;