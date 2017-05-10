import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const Sun = (props) => {
    return <Entity 
            position={{x: 0, y: 50, z: 0}} 
            light={{color: "#FFFFFF", groundColor:"#ff0000", id:"light"}} />
}

export default Sun;