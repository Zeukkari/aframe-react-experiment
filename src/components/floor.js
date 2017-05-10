import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const Floor = (props) => {
    return <Entity 
            primitive="a-plane" 
            src="#groundTexture" 
            scale="0.196 0.237 1" 
            rotation="-90 0 0" 
            height="100" 
            width="100"/>
};

export default Floor;