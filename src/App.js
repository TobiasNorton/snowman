import React, { Component } from 'react'
import './App.css'
import words from './words.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      correctLetters: ['_', '_', '_', '_', '_', '_', '_'],
      generatedWord: '',
      word: '_ _ _ _ _ _ _',
      keyboard: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ],
      snowmanStep: 0
    }
  }

  componentDidMount() {
    this.generateRandomWord()
  }

  generateRandomWord = () => {
    let randomNumber = Math.floor(Math.random() * words.length)
    let randomWord = words[randomNumber]
    this.setState({
      generatedWord: randomWord
    })
    console.log(`"${randomWord}" is the word of the game`)
  }

  letterClick = event => {
    let wordAsAnArray = this.state.generatedWord.split('')
    wordAsAnArray.map(letter => {
      if (event.target.value === letter) {
        this.state.correctLetters.splice(this.state.generatedWord.indexOf(letter), 1, letter)
      }
    })
    console.log(this.state.correctLetters)
  }

  render() {
    return (
      <div>
        <h1>Build A Snowman</h1>
        <div>
          <img className="snowman-image" src="./snowman_images/step_7.png" alt="Snowman" />

          <p className="word">{this.state.correctLetters}</p>
          <section className="keyboard">
            <div className="first-row">
              <button value="q" onClick={this.letterClick}>
                q
              </button>
              <button value="w" onClick={this.letterClick}>
                w
              </button>
              <button value="e" onClick={this.letterClick}>
                e
              </button>
              <button value="r" onClick={this.letterClick}>
                r
              </button>
              <button value="t" onClick={this.letterClick}>
                t
              </button>
              <button value="y" onClick={this.letterClick}>
                y
              </button>
              <button value="u" onClick={this.letterClick}>
                u
              </button>
              <button value="i" onClick={this.letterClick}>
                i
              </button>
              <button value="o" onClick={this.letterClick}>
                o
              </button>
              <button value="p" onClick={this.letterClick}>
                p
              </button>
            </div>
            <div className="second-row">
              <button value="a" onClick={this.letterClick}>
                a
              </button>
              <button value="s" onClick={this.letterClick}>
                s
              </button>
              <button value="d" onClick={this.letterClick}>
                d
              </button>
              <button value="f" onClick={this.letterClick}>
                f
              </button>
              <button value="g" onClick={this.letterClick}>
                g
              </button>
              <button value="h" onClick={this.letterClick}>
                h
              </button>
              <button value="j" onClick={this.letterClick}>
                j
              </button>
              <button value="k" onClick={this.letterClick}>
                k
              </button>
              <button value="l" onClick={this.letterClick}>
                l
              </button>
            </div>
            <div className="third-row">
              <button value="z" onClick={this.letterClick}>
                z
              </button>
              <button value="x" onClick={this.letterClick}>
                x
              </button>
              <button value="c" onClick={this.letterClick}>
                c
              </button>
              <button value="v" onClick={this.letterClick}>
                v
              </button>
              <button value="b" onClick={this.letterClick}>
                b
              </button>
              <button value="n" onClick={this.letterClick}>
                n
              </button>
              <button value="m" onClick={this.letterClick}>
                m
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
