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
import Comic from './components/comic'

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
          <img id="skyTexture" src="./img/sky.jpg" alt="" />
        </a-assets>
        <Sky />
        <Sun />
        <Floor />
        <Player />

        <TitleText text="Hello"/>
        <Comic src="./img/comic/comic323.PNG" />

      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
