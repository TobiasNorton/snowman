import React, { Component } from 'react'
import './App.css'
import words from './words.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      correctLetters: ['_ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _'],
      chosenLetters: [],
      generatedWord: '',
      word: ['', '', '', '', '', '', ''],
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
    this.state.chosenLetters.push(event.target.value)
    let wordAsAnArray = this.state.generatedWord.split('')
    wordAsAnArray.map(letter => {
      if (event.target.value === letter) {
        this.setSnowmanImage()
        this.state.correctLetters.splice(this.state.generatedWord.indexOf(letter), 1, letter)
      }
    })
    console.log(this.state.correctLetters)
    this.setState({
      correctLetters: this.state.correctLetters
    })
  }

  setSnowmanImage = () => {
    this.setState({
      snowmanStep: this.state.snowmanStep + 1
    })
  }

  gameCompleteHeader = () => {
    let completedWord = this.state.correctLetters
    if (this.state.generatedWord === completedWord.join('')) {
      return <p className="game-complete-header">Hey, you did it!</p>
    }
  }

  newGameButton = () => {
    let completedWord = this.state.correctLetters
    if (this.state.generatedWord === completedWord.join('')) {
      return (
        <button
          disabled={this.state.chosenLetters.includes('a')}
          onClick={this.resetGame}
          className="new-game-button"
        >
          Play Again
        </button>
      )
    }
  }

  resetGame = () => {
    this.generateRandomWord()
    this.setState({
      correctLetters: ['_ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _'],
      snowmanStep: 0,
      chosenLetters: []
    })
  }

  render() {
    return (
      <div>
        <h1>Build A Snowman</h1>
        <h3>Select a Letter to Begin</h3>
        {this.gameCompleteHeader()}
        <div className="reset-container">{this.newGameButton()}</div>
        <div>
          <img
            className="snowman-image"
            src={`./snowman_images/step_${this.state.snowmanStep}.png`}
            alt={`Snowman step ${this.state.snowmanStep}`}
          />

          <p className="word">
            {this.state.correctLetters.map(letter => {
              return <span>{letter.toUpperCase()}</span>
            })}
          </p>
          <section className="keyboard">
            <div className="first-row">
              <button
                disabled={this.state.chosenLetters.includes('q')}
                value="q"
                onClick={this.letterClick}
              >
                Q
              </button>
              <button
                disabled={this.state.chosenLetters.includes('w')}
                value="w"
                onClick={this.letterClick}
              >
                W
              </button>
              <button
                disabled={this.state.chosenLetters.includes('e')}
                value="e"
                onClick={this.letterClick}
              >
                E
              </button>
              <button
                disabled={this.state.chosenLetters.includes('r')}
                value="r"
                onClick={this.letterClick}
              >
                R
              </button>
              <button
                disabled={this.state.chosenLetters.includes('t')}
                value="t"
                onClick={this.letterClick}
              >
                T
              </button>
              <button
                disabled={this.state.chosenLetters.includes('y')}
                value="y"
                onClick={this.letterClick}
              >
                Y
              </button>
              <button
                disabled={this.state.chosenLetters.includes('u')}
                value="u"
                onClick={this.letterClick}
              >
                U
              </button>
              <button
                disabled={this.state.chosenLetters.includes('i')}
                value="i"
                onClick={this.letterClick}
              >
                I
              </button>
              <button
                disabled={this.state.chosenLetters.includes('o')}
                value="o"
                onClick={this.letterClick}
              >
                O
              </button>
              <button
                disabled={this.state.chosenLetters.includes('p')}
                value="p"
                onClick={this.letterClick}
              >
                P
              </button>
            </div>
            <div className="second-row">
              <button
                disabled={this.state.chosenLetters.includes('a')}
                value="a"
                onClick={this.letterClick}
              >
                A
              </button>
              <button
                disabled={this.state.chosenLetters.includes('s')}
                value="s"
                onClick={this.letterClick}
              >
                S
              </button>
              <button
                disabled={this.state.chosenLetters.includes('d')}
                value="d"
                onClick={this.letterClick}
              >
                D
              </button>
              <button
                disabled={this.state.chosenLetters.includes('f')}
                value="f"
                onClick={this.letterClick}
              >
                F
              </button>
              <button
                disabled={this.state.chosenLetters.includes('g')}
                value="g"
                onClick={this.letterClick}
              >
                G
              </button>
              <button
                disabled={this.state.chosenLetters.includes('h')}
                value="h"
                onClick={this.letterClick}
              >
                H
              </button>
              <button
                disabled={this.state.chosenLetters.includes('j')}
                value="j"
                onClick={this.letterClick}
              >
                J
              </button>
              <button
                disabled={this.state.chosenLetters.includes('k')}
                value="k"
                onClick={this.letterClick}
              >
                K
              </button>
              <button
                disabled={this.state.chosenLetters.includes('l')}
                value="l"
                onClick={this.letterClick}
              >
                L
              </button>
            </div>
            <div className="third-row">
              <button
                disabled={this.state.chosenLetters.includes('z')}
                value="z"
                onClick={this.letterClick}
              >
                Z
              </button>
              <button
                disabled={this.state.chosenLetters.includes('x')}
                value="x"
                onClick={this.letterClick}
              >
                X
              </button>
              <button
                disabled={this.state.chosenLetters.includes('c')}
                value="c"
                onClick={this.letterClick}
              >
                C
              </button>
              <button
                disabled={this.state.chosenLetters.includes('v')}
                value="v"
                onClick={this.letterClick}
              >
                V
              </button>
              <button
                disabled={this.state.chosenLetters.includes('b')}
                value="b"
                onClick={this.letterClick}
              >
                B
              </button>
              <button
                disabled={this.state.chosenLetters.includes('n')}
                value="n"
                onClick={this.letterClick}
              >
                N
              </button>
              <button
                disabled={this.state.chosenLetters.includes('m')}
                value="m"
                onClick={this.letterClick}
              >
                M
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
