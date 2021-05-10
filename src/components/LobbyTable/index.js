import React, { useState } from 'react'

import Title from '@components/Title'
import ProgressBar from '@components/ProgressBar'
import GameActions from '@components/GameActions'
import './index.css'

const Table = ({ table, onTableClick, progress }) => {
  const [percent, setPercent] = useState(0)
  // const dispatch = useDispatch();

  console.log('table', table)

  const handleIconClick = (val, gameId) => {
    console.log('icon val', val)
    console.log('icon gameId', gameId)
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
          <div className="table-bets">
            <span>
              bet
            </span>
          </div>
          <div className="table-win">
            <span>
              win
            </span>
          </div>
        </div>
      </div>
      <div className="table-countdown">
        <ProgressBar
          percent={progress}
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
          game={table}
          handleChooseHand={handleIconClick}
        />
      </div>
    </div>
  )
}

export default Table
