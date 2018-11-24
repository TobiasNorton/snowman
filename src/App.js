import React, { Component } from 'react'
import './App.css'
import words from './words.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyboard: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ],
      snowmanStep: 0
    }
  }

  setSnowman = () => {}

  // generateRandomWord = () => {}

  render() {
    return (
      <div>
        <h1>Build A Snowman</h1>
        {/* {generateRandomWord()} */}
        <div>
          <img className="snowman-image" src="./snowman_images/step_7.png" />

          <p className="word">Word Goes Here</p>

          <section className="keyboard">
            <div className="first-row">
              <button onClick>q</button>
              <button>w</button>
              <button>e</button>
              <button>r</button>
              <button>t</button>
              <button>y</button>
              <button>u</button>
              <button>i</button>
              <button>o</button>
              <button>p</button>
            </div>
            <div className="second-row">
              <button>a</button>
              <button>s</button>
              <button>d</button>
              <button>f</button>
              <button>g</button>
              <button>h</button>
              <button>j</button>
              <button>k</button>
              <button>l</button>
            </div>
            <div className="third-row">
              <button>z</button>
              <button>x</button>
              <button>c</button>
              <button>v</button>
              <button>b</button>
              <button>n</button>
              <button>m</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
