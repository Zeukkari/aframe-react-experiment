import 'aframe';
import 'aframe-text-geometry-component';
import {Entity} from 'aframe-react';
import React from 'react';

const TitleText = ({text, position, rotation, scale}) => {
    return (<Entity id="titletext"
            position={position} 
            rotation={rotation}
            scale={scale}
            text-geometry={{value: (text)}}
            material="color: green;" />
    );
}

export default TitleText;