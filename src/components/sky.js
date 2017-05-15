import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const Sky = (props) => {
    return <Entity 
            primitive="a-sky" 
            scale="-0.5 0.6 0.5" 
            height="2048" 
            radius="30" 
            src="#skyTexture" 
            theta-length="90" 
            width="2048"/>
};

export default Sky;