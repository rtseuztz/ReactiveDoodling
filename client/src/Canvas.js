import React, { Component } from "react";
import { render } from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default class MyCanvas extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12,
    backgroundImg: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
      "https://i.imgur.com/a0CGGVC.jpg"
    ]
  };

  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);

    // let's change the background image every 2 seconds. fun!
    window.setInterval(() => {
      if (
        this.state.imgs &&
        this.state.imgs.length &&
        this.state.backgroundImg
      ) {
        let img = '';
        let imgs = this.state.imgs;
        for (let i = 0; i < imgs.length; i++) {
          if (this.state.backgroundImg !== imgs[i]) {
            img = imgs[i];
          }
        }

        this.setState({
          backgroundImg: img,
        });
      }
    }, 2000);

    var HOST = window.location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(HOST);
    ws.onmessage = function (event) {
      console.log(event)
    };
    ws.onopen = (event) => {
      ws.send("bananana");
    };
  }
  render() {
    return (
      <CanvasDraw
      enablePanAndZoom
      gridColor="#ccc"
      hideGrid
      canvasWidth={1500}
      canvasHeight={700}
      backgroundColor ="#FF0000"
      />
    );
  }
}