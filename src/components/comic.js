import 'aframe';
import 'aframe-look-at-billboard-component';
import {Entity} from 'aframe-react';
import React from 'react';

const Comic = ({src}) => {
    console.log("src: ", src);
    let position = {x: 0, y: 0, z: 0};
    return <Entity
            billboard 
            primitive="a-plane"  
            scale="0.136 0.103 1" 
            rotation="0 0 0"
            position={position} 
            height="33" 
            width="33"
            material={{src: "#"+src, shader: "flat" }}
            />
};

export default Comic;