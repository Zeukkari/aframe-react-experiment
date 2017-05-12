import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const Comic = ({src, position}) => {
    console.log("src: ", src);
    return <Entity 
            primitive="a-plane"  
            scale="0.136 0.103 1" 
            rotation="0 0 0"
            position={{x: 0, y: 2, z: -6.915}} 
            height="33" 
            width="33"
            material={{src: src, shader: "flat" }}
            />
};

export default Comic;