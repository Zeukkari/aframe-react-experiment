import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-animation-component';
import {Entity} from 'aframe-react';
import React from 'react';

const Title = (props) => {
    return <Entity 
            position={{x: -0.5, y: 2.5, z: -5}} 
            rotation="0 0 0" 
            /*
            animation={{
                begin: "fade", 
                property: "scale", 
                direction: "alternate", 
                repeat: "indefinite", 
                loop: true, 
                from: "2 2 2", 
                to: "-2 -2 -2"
            }}
            */
            text-geometry={{value: 'Enkrateia Expedition'}}
            material="color: red;" />
}

export default Title;