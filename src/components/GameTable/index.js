import React, { useState } from 'react'

import GameActions from '@components/GameActions'
import Title from '@components/Title'
import ProgressBar from '@components/ProgressBar'
import OpponentHand from '@components/OpponentHand'
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
            status={status}
          />
        </div>
        <div className="game-bet">
          <div className="game-details">
            <div className="table-stats">
              <span className="bets-label">
                BET
              </span>
              <span className="bets-val">
                {bet}
              </span>
            </div>
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
