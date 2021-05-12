import React from 'react'
import { Title, GameActions, ProgressBar, OpponentHand, ScoreInfo} from 'react-rps-components'

import './index.css'

const GameTable = ({ gameId, progress, status, bet, onChooseHand, hand, opponentHand }) => {
  const handleIconClick = val => {
    onChooseHand(val)
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <Title
          title={`table #${gameId}`}
        />
      </div>
      <div className="game-content">
        <div className="game-countdown">
          <ProgressBar
            percent={progress}
          />
        </div>
        <div className="game-bet">
          <div className="game-details">
            <ScoreInfo label={'BET'} value={bet}/>
            <OpponentHand hand={opponentHand}/>
          </div>
        </div>
        <GameActions
          gameId={gameId}
          handleChooseHand={handleIconClick}
          hand={hand}
          status={status}
        />
      </div>
    </div>
  )
}

export default GameTable
