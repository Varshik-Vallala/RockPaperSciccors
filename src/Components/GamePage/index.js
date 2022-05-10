import {Component} from 'react'

import './index.css'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ChoiceItem from '../ChoiceItem'

import 'reactjs-popup/dist/index.css'

import {
  Container,
  SubContainer,
  ScoreCard,
  ResultText,
  Score,
  ChoiceContainer,
  Button,
  PopupContainer,
  Choice,
  ResultContainer,
  Heading,
} from './styledComponents'

class GamePage extends Component {
  state = {
    score: 0,
    showResult: false,
    result: {},
    resultMessage: '',
  }

  chooseChoice = id => {
    const {choicesList} = this.props
    // const {result} = this.state

    const opponent =
      choicesList[Math.floor(Math.random() * choicesList.length)].id

    const userChoice = choicesList.filter(eachChoice => eachChoice.id === id)

    const result = {
      opponent,
      userChoice,
    }

    if (id === 'ROCK' && opponent === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({resultMessage: 'YOU WON'})
    } else if (id === 'ROCK' && opponent === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({resultMessage: 'YOU LOSE'})
    }

    if (id === 'PAPER' && opponent === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({resultMessage: 'YOU WON'})
    } else if (id === 'PAPER' && opponent === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({resultMessage: 'YOU LOSE'})
    }

    if (id === 'SCISSORS' && opponent === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({resultMessage: 'YOU WON'})
    } else if (id === 'SCISSORS' && opponent === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({resultMessage: 'YOU LOSE'})
    }

    if (id === opponent) {
      this.setState({resultMessage: 'IT IS DRAW'})
    }

    this.setState({result})

    this.setState(prevState => ({showResult: !prevState.showResult}))

    // console.log(result)
  }

  playAgain = () => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
    }))
  }

  render() {
    const {score, showResult, result, resultMessage} = this.state
    const {choicesList} = this.props

    const {userChoice, opponent} = result

    const opponentChoice = choicesList.filter(
      eachChoice => eachChoice.id === opponent,
    )

    // console.log(result.userChoice, opponentChoice)

    // console.log(Math.floor(Math.random() * choicesList.length))

    return (
      <Container>
        <SubContainer>
          <ScoreCard>
            <div>
              <Heading size="true">Rock</Heading>
              <Heading size="true">Paper</Heading>
              <Heading size="true">Scissors</Heading>
            </div>
            <Score>
              <p className="score">Score</p>
              <p className="score score-value">{score}</p>
            </Score>
          </ScoreCard>
          {showResult ? (
            <ResultContainer>
              <div className="results-container">
                <div>
                  <Heading margin="true">YOU</Heading>
                  <Choice src={userChoice[0].imageUrl} alt="your choice" />
                </div>
                <div>
                  <Heading margin="true">OPPONENT</Heading>
                  <Choice
                    src={opponentChoice[0].imageUrl}
                    alt="opponent choice"
                  />
                </div>
              </div>
              <ResultText margin="true">{resultMessage}</ResultText>
              <Button width="true" type="button" onClick={this.playAgain}>
                PLAY AGAIN
              </Button>
            </ResultContainer>
          ) : (
            <ChoiceContainer>
              {choicesList.map(eachChoice => (
                <ChoiceItem
                  eachChoice={eachChoice}
                  chooseChoice={this.chooseChoice}
                  key={eachChoice.id}
                />
              ))}
            </ChoiceContainer>
          )}

          <PopupContainer>
            <Popup modal trigger={<Button type="button">Rules</Button>}>
              {close => (
                <>
                  <div>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine />
                    </button>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="rules-image"
                    />
                  </div>
                </>
              )}
            </Popup>
          </PopupContainer>
        </SubContainer>
      </Container>
    )
  }
}

export default GamePage
