import React, { useState } from 'react'

import GameActions from '@components/GameActions'
import Title from '@components/Title'
import ProgressBar from '@components/ProgressBar'
import './index.css'

const Table = ({ table, onChooseHand, progress }) => {
  const [percent, setPercent] = useState(0)

  console.log('table', table)

  const handleIconClick = (val, gameId) => {
    console.log('icon val', val)
    console.log('icon gameId', gameId)
    onChooseHand()
  }
  
  return (
    <div className="game-container">
      <div className="game-header">
        <div className="game-header__left">
          <Title
            title={`table #${table.gameId}`}
          />
        </div>
      </div>
      <div className="game-content">
        <div className="game-countdown">
          <div>
            <ProgressBar
              percent={progress}
            />
          </div>
        </div>
        <GameActions
          game={table}
          handleChooseHand={handleIconClick}
        />
        
      </div>
    </div>
  )
}

export default Table
