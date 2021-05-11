import React, { useState } from 'react'

import Title from '@components/Title'
import ProgressBar from '@components/ProgressBar'
import GameActions from '@components/GameActions'
import './index.css'

const Table = ({ table, onTableClick, onChooseHand, bet }) => {
  console.log('lobby table', table)

  const handleIconClick = (val, gameId) => {
    onChooseHand(gameId, val)
  }
  
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header__left">
          <Title
            title={`table #${table.gameId}`}
          />
        </div>
        <div className="table-header__right">
          <div className="table-stats">
            <span className="bets-label">
              BET
            </span>
            <span className="bets-val">
              {bet}
            </span>
          </div>
          <div className="table-stats">
            <span className="bets-label">
              WIN
            </span>
            <span className="bets-val">
              {table.winAmount}
            </span>
          </div>
        </div>
      </div>
      <div className="table-countdown">
        <ProgressBar
          percent={table.progress}
          status={table.status}
        />
      </div>
      <div className="table-content">
        <div className="table-content__top">
          <button
            onClick={onTableClick}
          >
            Join
          </button>
        </div>
        <GameActions
          gameId={table.gameId}
          handleChooseHand={handleIconClick}
          hand={table.selectedHand}
          status={table.status}
        />
      </div>
    </div>
  )
}

export default Table
