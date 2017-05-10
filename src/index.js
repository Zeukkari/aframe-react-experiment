import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';

import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Sun from './components/sun';
import Sky from './components/sky';
import Floor from './components/floor';
import Title from './components/title';
import Player from './components/player';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }
  
  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="./img/floor.jpg"/>
          <img id="skyTexture" src="./img/sky.jpg"/>
        </a-assets>
        <Sun />
        <Sky />
        <Floor />
        <Title />
        <Player />
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
