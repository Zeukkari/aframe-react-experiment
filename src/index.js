import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'aframe-text-geometry-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="./img/floor.jpg"/>
          <img id="skyTexture" src="./img/sky.jpg"/>
        </a-assets>

        {/*The Sun*/}
        <Entity position={{x: 0, y: 50, z: 0}} light={{color: "#FFFFFF", groundColor:"#ff0000", id:"light"}} />

        {/*The Sky*/}
        <Entity primitive="a-sky" scale="-0.4 0.4 0.4" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        {/*The Ground*/}
        <Entity primitive="a-plane" src="#groundTexture" scale="0.196 0.237 1" rotation="-90 0 0" height="100" width="100"/>



        {/*Header*/}
        <Entity position={{x: -0.5, y: 2.5, z: -5}} rotation="0 0 0" color="#0000F0"  
          text-geometry={{value: 'Enkrateia Expedition'}} 
          animation={{begin: "fade", property: "scale", direction: "alternate", repeat: "indefinite", loop: true, from: "2 2 2", to: "-2 -2 -2"}}/>

        {/*Player*/}
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
