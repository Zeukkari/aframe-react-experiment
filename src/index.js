import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import {Scene} from 'aframe-react';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Sun from './components/sun';
import Sky from './components/sky';
import Floor from './components/floor';
import Player from './components/player';
import TitleText from './components/title';
import ComicLayout from './components/comiclayout';
import SceneProp from './components/sceneprop';
import SpotLight from './components/spotlight';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }
  
  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="./img/floor.jpg" alt="" />
          <img id="skyTexture" src="./img/sky.png" alt="" />
          <img id="prop1" src="./img/prop1.png" alt="" />
          <img id="prop2" src="./img/prop2.jpg" alt="" />
          <img id="comic333" src="./img/comic/comic333.PNG" alt="" />
          <img id="comic334" src="./img/comic/comic334.PNG" alt="" />
          <img id="comic335" src="./img/comic/comic335.PNG" alt="" />
          <img id="comic336" src="./img/comic/comic336.PNG" alt="" />
          <img id="comic337" src="./img/comic/comic337.PNG" alt="" />
          <img id="comic338" src="./img/comic/comic338.PNG" alt="" />
          <img id="comic339" src="./img/comic/comic339.PNG" alt="" />
        </a-assets>
        <Sky />
        <Sun />
        <TitleText text="Enkrateia Expedition" position={{x: -2.5, y: 5.5, z: -3}} rotation="50 0 0" scale="1 2.9 1"/>
        <Floor />
        <Player />
        <ComicLayout />
        <SceneProp src="prop1" position={{x: -2.706, y: 6.092, z: -5}} rotation="34.206 2.807 0" scale="0.788 0.535 1" />
        <SceneProp src="prop2" position={{x: 2.706, y: 6.092, z: 5}} rotation="90 2.807 0" scale="0.788 0.535 1" />
        <SpotLight />
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
