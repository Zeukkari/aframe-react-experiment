import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const SpotLight = ({src}) => {
    console.log("src: ", src);
    let position = {x: 0, y: 0, z: 0};
    return <Entity  
            scale="0.136 0.103 1" 
            rotation="0 0 0"
            position="0 0.5 0"
            distance="10"
            light="type:spot;target:titletext;angle:90"
            />
};
export default SpotLight;