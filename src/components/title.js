import 'aframe';
import 'aframe-text-geometry-component';
import {Entity} from 'aframe-react';
import React from 'react';

const TitleText = ({text}) => {
    return (<Entity 
            position={{x: -0.5, y: 2.5, z: -5}} 
            rotation="0 0 0" 
            text-geometry={{value: (text)}}
            material="color: red;" />
    );
}

export default TitleText;