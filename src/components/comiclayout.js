import 'aframe';
import 'aframe-layout-component';
import {Entity} from 'aframe-react';
import React from 'react';

import Comic from './comic';

const ComicLayout = (props) => {
    return (<Entity layout="type: circle; radius: 4" position={{x: 0, y: 1.5, z: 0}}>
                <Comic src="comic333" />
                <Comic src="comic334" />
                <Comic src="comic335" />
                <Comic src="comic336" />
                <Comic src="comic337" />
                <Comic src="comic338" />
                <Comic src="comic339" />
            </Entity>);
};

export default ComicLayout;